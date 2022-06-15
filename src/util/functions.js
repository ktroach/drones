
export const getCount = (collection) => {
    let count = 0;
    if (collection && collection.length > 0 ) {
        for (let i in collection) {
            const items = collection[i];
            count = items?.length;
        }
    }
    return count;
};