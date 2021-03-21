function arrayDiff(a, b) {
    return a.filter(elem => {
        const test = b.find(e => e === elem);
        return test === null || test === undefined;
    });
}