import * as core from '@actions/core';
import generateReadme from './generate';
import { arrayToObjectMap } from './utils';

async function run(): Promise<void> {
    try {
        const inputs = arrayToObjectMap([
            "contentfulAccessToken",
            "contentfulSpaceId",
            "headerKey",
            "subheaderKey",
            "footerKey",
            "path",
            "ref",
            "imageSize",
            "excludeActivity",
            "excludeRepo"
        ], (item) => core.getInput(item));

        await generateReadme(inputs);
    }
    catch(error) {
        core.setFailed(error.message);
    }
}

run();