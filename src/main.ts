import * as core from '@actions/core';
import generateReadme from './generate';

export type KeyValueStore = {
    [key: string]: string
};

const getInputs: {(names: string[]): KeyValueStore} = (names: string[]) =>
    names
        .map(item => ({ [item]: core.getInput(item) }))
        .reduce((prev, current) => ({...prev, ...current}));

async function run(): Promise<void> {
    try {
        const inputs = getInputs([
            "headerKey",
            "subhead",
            "footer",
            "path",
            "ref",
            "imageSize",
            "excludeActivity",
            "excludeRepo"

        ]);

        await generateReadme(inputs);
    }
    catch(error) {
        core.setFailed(error.message);
    }
}

run();