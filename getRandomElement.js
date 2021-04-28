const getRandomNumber = (arr) => {
  console.log(arr[Math.floor(Math.random() * arr.length)]);
};

const arr = [12, 24, 36, 48, 60];
getRandomNumber(arr);
