import { PositionReadmeFragment } from "../generated/graphql";

function parseStringDate(date: string) {
    const split = date.split('/');
    switch(split.length) {
        case 3: {
            return new Date(date);
        }
        case 2: {
            return new Date([split[0], "1", split[1]].join('/'));
        }
        case 1: {
            return new Date("01/01/" + split[0]);
        }
        default: {
            throw new Error("Invalid date format: " + date);
        }
    }
}

function sortItemsByDate<T>(items: T[], getDateProperty: {(item: T): string}) {
    return items.slice().sort((a, b) => +parseStringDate(getDateProperty(b)) - +parseStringDate(getDateProperty(a)));
}

export default function CurrentPosition(positions: PositionReadmeFragment[]) {
    const latestPosition = sortItemsByDate(positions, position => position.startDate)[0];

    return `<img align="left" src="https://raw.githubusercontent.com/Merlin04/github-contentful-readme/main/business-24px.svg">${latestPosition.position} at
${latestPosition.companyUrl ? `<a href="${latestPosition.companyUrl}">${latestPosition.company}</a>` : latestPosition.company}`;
}