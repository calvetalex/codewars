function validatePIN(pin) {
    return (pin.length === 4 || pin.length === 6) ? /^\d+$/.test(pin) : false;
}