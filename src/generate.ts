import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';
import { Octokit } from '@octokit/core';
import fetch from 'cross-fetch';
import CurrentPosition from './components/CurrentPosition';
import ItemTable from './components/ItemTable';
import ProjectCell from './components/ProjectCell';
import { ReadmeData, ReadmeDataQuery, ReadmeDataQueryVariables } from './generated/graphql';
import { KeyValueStore, arrayToObjectMap } from './utils';

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
    const keyValuePairs = arrayToObjectMap(["header", "subheader", "footer", "url"], item => item, item => inputs[item + "Key"]);
    const queryResult = await apolloClient.query<ReadmeDataQuery, ReadmeDataQueryVariables>({ query: ReadmeData, variables: {
        keyValuePairs: Object.keys(keyValuePairs),
        setOfProjectsCollectionId: inputs["setOfProjectsCollectionId"],
        projectsLimit: parseInt(inputs["projectsLimit"])
    }});
    console.log(`Requesting key-value pairs: ${JSON.stringify(keyValuePairs)}`);
    console.log(queryResult.data.keyValuePairCollection);
    console.log(queryResult.data.setOfProjectsCollection?.items);
    const queryKeyValuePairs = arrayToObjectMap(queryResult.data.keyValuePairCollection?.items ?? throwUndefinedError("keyValuePairCollection"), kvp => kvp.value, kvp => keyValuePairs[kvp.key]);

    const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY;
    if (GITHUB_REPOSITORY === undefined) {
        throw new Error("GITHUB_REPOSITORY is undefined");
    }
    
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

    const data = `
# ${queryKeyValuePairs["header"]}

### ${queryKeyValuePairs["subheader"]}
${queryResult.data.positionCollection?.items[0] !== undefined
    ? "\n" + CurrentPosition(queryResult.data.positionCollection.items) : ""}
${queryKeyValuePairs["url"] !== undefined ? (
`
<table><tr><td><a href="${queryKeyValuePairs["url"]}"><img align="left" src="https://raw.githubusercontent.com/Merlin04/github-contentful-readme/main/link-24px.svg">Go to website</a></td></tr></table>`
) : ""}
${inputs["setOfProjectsCollectionId"] !== undefined && queryResult.data.setOfProjectsCollection
    ? "\n" + ItemTable(queryResult.data.setOfProjectsCollection.items[0].featuredProjectsCollection.items.map(project => ProjectCell(project, 400)), 2, 400) : ""}

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