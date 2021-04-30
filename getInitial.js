function getInitial(words) {
  return words
    .split(" ")
    .map((word) => word.charAt(0))
    .toUpperCase()
    .join("");
}

getInitial("we are here");
