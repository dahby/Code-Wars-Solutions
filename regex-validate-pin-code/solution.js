function validatePIN (pin) {
  if (pin.length === 4 || pin.length ===6) {
    if (/[^0-9]/.test(pin)) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}