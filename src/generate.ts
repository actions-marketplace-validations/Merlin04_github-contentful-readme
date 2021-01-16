import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';
import { Octokit } from '@octokit/core';
import fetch from 'cross-fetch';
import { ReadmeData, ReadmeDataQuery } from './generated/graphql';
import { KeyValueStore, arrayToObjectMap } from './utils';

const chunkArray = <T>(array: T[], size: number) => {
    let chunked = [];
    let index = 0;
    while (index < array.length) {
        chunked.push(array.slice(index, size + index));
        index += size;
    }
    return chunked;
}

const getApollo = (token: string, space: string) => new ApolloClient({
    link: new HttpLink({
        uri: "https://graphql.contentful.com/content/v1/spaces/" + space,
        headers: {
            authorization: "Bearer " + token
        },
        fetch
    }),
    cache: new InMemoryCache()
});

function throwUndefinedError(name: string) {
    throw new Error(name + " is undefined");
    // Unreachable code included to make TypeScript think this can return something
    return [];
}

export default async function generateReadme(inputs: KeyValueStore) {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

    const apolloClient = getApollo(inputs["contentfulAccessToken"], inputs["contentfulSpaceId"]);
    const keyValuePairs = arrayToObjectMap(["header", "subheader", "footer"], item => item, item => inputs[item + "Key"]);
    const queryResult = await apolloClient.query<ReadmeDataQuery>({ query: ReadmeData, variables: {
        keyValuePairs: Object.keys(keyValuePairs)
    }});
    console.log(`Requesting key-value pairs: ${JSON.stringify(keyValuePairs)}`);
    console.log(queryResult.data.keyValuePairCollection);
    const queryKeyValuePairs = arrayToObjectMap(queryResult.data.keyValuePairCollection?.items ?? throwUndefinedError("keyValuePairCollection"), kvp => kvp.value, kvp => keyValuePairs[kvp.key]);
    /*const queryKeyValuePairs = queryResult.data.items.map(item => ({
        [item.key]: item.value
    })).reduce((prev, cur) => ({...prev, ...cur}));*/

    const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY;
    if (GITHUB_REPOSITORY === undefined) {
        throw new Error("GITHUB_REPOSITORY is undefined");
    }

    //const repoCount = parseInt(inputs["repoCount"]);

    const username = GITHUB_REPOSITORY.split("/")[0]
    const repo = GITHUB_REPOSITORY.split("/")[1]
    const getReadme = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: username,
        repo: repo,
        path: inputs["path"],
    });

    // @ts-ignore - TypeScript doesn't like this
    const sha = getReadme.data.sha;
    if (sha === undefined) throw new Error("Commit SHA is undefined");

    //let recentReposHaveImage: boolean[] = [];
    //let recentRepos = new Set<string>();

    /** GitHub Activity pagination is limited at 100 records x 3 pages */
    /*for (let i = 0; recentRepos.size < repoCount && i < 3; i++) {
        console.log(i);
        const getActivity = await octokit.request(`GET /users/{username}/events/public?per_page=100&page=${i}`, {
            username: username,
        }).catch(e => {
            throw e;
        });
        console.log(getActivity);
        console.log(getActivity.data);
        for (const value of getActivity.data) {
            console.log(value);
            let activityRepo = value.repo.name;
            if (value.type === "ForkEvent") activityRepo = value.payload.forkee.full_name;
            if (!JSON.parse(inputs["excludeActivity"]).includes(value.type) && !JSON.parse(inputs['excludeRepo']).includes(activityRepo)) {
                recentRepos.add(activityRepo);
            }
            if (recentRepos.size >= repoCount) break;
        }
    }

    for (const repo of recentRepos) {
        await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: repo.split("/")[0],
            repo: repo.split("/")[1],
            path: 'DISPLAY.jpg',
        }).then(() => {
            recentReposHaveImage.push(true);
        }).catch(e => {
            recentReposHaveImage.push(false);
        });
    }*/

    const data = `
# ${queryKeyValuePairs["header"]}

### ${queryKeyValuePairs["subheader"]}


${queryKeyValuePairs["footer"]}
    `;

    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
        owner: username,
        repo: repo,
        path: inputs["path"],
        message: '(Automated) Update README.md',
        content: Buffer.from(data, "utf8").toString('base64'),
        sha: sha
    });
}