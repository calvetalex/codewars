function isPangram(string) {
    const res = [];

    string.toLowerCase().split('').forEach(e => {
        if (/[a-z]/i.test(e) && res.indexOf(e) === -1) {
            res.push(e);
        }
    });
    return res.length === 26;
}