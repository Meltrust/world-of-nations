const truncateBigNumbers = (number) => {
  // Nine Zeroes for Billions
  if ((Math.abs(Number(number))) >= 1.0e+9) {
    return `${(Math.abs(Number(number)) / 1.0e+9).toFixed(2)} billion`;
  }
  // Six Zeroes for Millions
  if (Math.abs(Number(number)) >= 1.0e+6) {
    return `${(Math.abs(Number(number)) / 1.0e+6).toFixed(2)} million`;
  }
  // Three Zeroes for Thousands
  if (Math.abs(Number(number)) >= 1.0e+3) {
    return `${(Math.abs(Number(number)) / 1.0e+3).toFixed(2)} K`;
  }
  return Math.abs(Number(number));
};

export default truncateBigNumbers;
