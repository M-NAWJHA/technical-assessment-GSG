const handelRmDuplicates = arr => {
  const uniqueArr = [...new Set(arr)];
  if (Array.isArray(arr)) {
    return `Remove Duplicates: ${uniqueArr}`;
  } else {
    return 'The input is not array';
  }
};

const arrString = ['a', 'b', 'c', 'd', 'e', 'b', 'c', 'd'];
console.log(
  `Array of String: ${arrString} => ${handelRmDuplicates(arrString)}`
);
