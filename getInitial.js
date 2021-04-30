function getInitial(words) {
  return words
    .split(" ")
    .map((word) => word.charAt(0))
    .toUpperCase()
    .join("");
}

// There are no accidents
const initialString = getInitial("we are here");
