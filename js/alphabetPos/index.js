function alphabetPosition(text) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const test = text.toLowerCase().replace(/[^a-z]/gi, '').split('');
  
    return test.map((e, idx) => idx !== test.length - 1 ? `${alphabet.indexOf(e) + 1} ` : alphabet.indexOf(e) + 1).join('');
}