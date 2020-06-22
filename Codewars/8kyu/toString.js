function colorOf(r, g, b) {
  return "#" + toHex(r) + toHex(g) + toHex(b);
}

function toHex(n) {
  let hex = n.toString(16);
  return hex.length == 2 ? hex : "0" + hex;
}
