import { gql } from "@apollo/client/core";

export const README_QUERY = gql`
query ReadmeData($keyValuePairs: [String]) {
    keyValuePairCollection(where: {
        key_in: $keyValuePairs
    }) {
        items {
            key,
            value
        }
    }
}`;

export interface ReadmeQuery {
    keyValuePairCollection: {
        items: {
            key: string,
            value: string
        }[]
    }
}