function checkZeroDate(date) {
  return date < 10 ? '0' + date : date;
}

export default checkZeroDate;