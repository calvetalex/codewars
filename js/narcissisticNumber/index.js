function narcissistic(value) {
    value = String(value);
    if (!/^\d+$/.test(value)) {
        return false;
    }
    const test = value.split('');
    const power  = value.length;

    return test.map(e => Number(e)**power).reduce((a,b) => a + b) === parseInt(value);
}