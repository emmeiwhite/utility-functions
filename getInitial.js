function getInitial(words) {
  return words
    .split(" ")
    .map((word) => word.charAt(0))
    .toUpperCase()
    .join("");
}

const initialString = getInitial("we are here");
