function padIt(str, n) {
  //coding here
  while (n > 0) {
    if (n % 2 == 0) {
      str = str + "*";
    } else {
      str = "*" + str;
    }
    n--;
  }
  return str;
}
