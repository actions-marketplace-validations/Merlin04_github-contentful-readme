export type KeyValueStore = {
    [key: string]: string
};

export function arrayToObjectMap<TItem, TResult>(array: TItem[], mapper: {(item: TItem): TResult}, keyMapper?: {(item: TItem): string}) {
    return array.map(item => ({
        [keyMapper !== undefined ? keyMapper(item) : String(item)]: mapper(item)
    })).reduce((prev, current) => ({...prev, ...current}));
}