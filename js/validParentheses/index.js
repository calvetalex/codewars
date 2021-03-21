function validParentheses(parens) {
    const validator = /\(\)/;
    if (validator.test(parens)) {
        return validParentheses(parens.replace(validator, ''));
    }
    return parens === '';
}