function positiveSum(arr) {
  let positiveArray = arr.filter((elem) => elem > 0);

  let sumPositive = positiveArray.reduce((a, b) => a + b, 0);
  return sumPositive;
}
