function whatNumberIsIt(n) {
  switch (true) {
    case n == Number.MAX_VALUE:
      return "Input Number is Number.MAX_VALUE";
    case n == Number.MIN_VALUE:
      return "Input Number is Number.MIN_VALUE";
    case n == Number.NEGATIVE_INFINITY:
      return "Input Number is Number.NEGATIVE_INFINITY";
    case n == Number.POSITIVE_INFINITY:
      return "Input Number is Number.POSITIVE_INFINITY";
    case isNaN(n):
      return "Input Number is Number.NaN";
    default:
      return "Input number is " + n;
  }
}
