function last(arr) {
  return arr[arr.length - 1];
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

export { last, getRandom };
