function printerError(s) {
    const notInRange = s.split('').toLowerCase().filter(e => !/[a-m]/i.test(e));
    return `${notInRange.length}/${s.length}`;
}