function checkAmount(amount) {
  if ((amount ^ 0) === amount) {
    amount += '.00';
  } else {
    amount = String(amount);
  }
  if (amount.length > 6 && amount.length < 10) {
    return amount.slice(0, amount.length - 6) + ' ' + amount.slice(amount.length - 6);
  } else if (amount.length > 9) {
    return amount.slice(0, amount.length - 9) + ' ' + amount.slice(amount.length - 9, amount.length - 6) + ' ' + amount.slice(amount.length - 6);
  } else {
    return amount;
  }
}

export default checkAmount;