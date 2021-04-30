function getInitial(words) {
  return words
    .split(" ")
    .map((word) => word.charAt(0))
    .toUpperCase()
    .join("");
}

// We are storing a value in here
const initialString = getInitial("we are here");
