import { PositionReadmeFragment } from "../generated/graphql";

// Sort the positions so that at the beginning are the positions with an undefined endDate (sorted by their startDate from most recent to oldest), then all the others sorted by their startDate from most recent to oldest
function sortPositions(positions: PositionReadmeFragment[]): PositionReadmeFragment[] {
    // Split the positions into two arrays, one with the positions with an undefined endDate and the other for the others
    return positions.reduce<[PositionReadmeFragment[], PositionReadmeFragment[]]>((accumulator, position) => {
        accumulator[position.endDate ? 1 : 0].push(position);
        return accumulator;
    }, [[], []])
        .map((positions) => positions.sort((a, b) => +parseStringDate(b.startDate) - +parseStringDate(a.startDate)))
        .flat();
}


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

export default function CurrentPosition(positions: PositionReadmeFragment[]) {
    const latestPosition = sortPositions(positions)[0];

    return `<img align="left" src="https://raw.githubusercontent.com/Merlin04/github-contentful-readme/main/business-24px.svg">${latestPosition.position} at
${latestPosition.companyUrl ? `<a href="${latestPosition.companyUrl}">${latestPosition.company}</a>` : latestPosition.company}`;
}