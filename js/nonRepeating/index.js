function firstNonRepeatingLetter(s) {
    const test = s.toLowerCase();
    if (!s) {
        return "";
    }
    return test.split('').map((letter, idx) => {
        if (!test.slice(idx + 1).includes(letter) && !test.slice(0, idx).includes(letter)) return s[idx];
        return null;
    }).filter(e=>e)[0] || "";
}