function grabDoll(dolls) {
  var bag = [];
  for (d in dolls) {
    if (dolls[d] == "Hello Kitty" || dolls[d] == "Barbie doll")
      bag.push(dolls[d]);
    if (bag.length < 3) continue;
    break;
  }
  return bag;
}
