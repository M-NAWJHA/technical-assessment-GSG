// Handle sum and average
const handelSumAve = argument => {
  let sum = argument.reduce((acc, val) => acc + val, 0);
  let average = sum / argument.length;
  if (Array.isArray(argument) && argument.length > 0) {
    return `Sum: ${sum} , Average: ${average}`;
  } else {
    return 'The input is not array or the array length < 1 element';
  }
};

// Array of numbers
const arr1 = [2, 4, 6, 8, 10];
console.log(handelSumAve(arr1));
