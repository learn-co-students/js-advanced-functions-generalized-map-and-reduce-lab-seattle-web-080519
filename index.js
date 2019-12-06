function map(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

function reduce(sourceArray, callback, startingValue) {
  let finalValue = startingValue ? startingValue : sourceArray[0];
  let i = startingValue ? 0 : 1;
  for (; i < sourceArray.length; i++) {
    finalValue = callback(sourceArray[i], finalValue);
  }
  return finalValue;
}
