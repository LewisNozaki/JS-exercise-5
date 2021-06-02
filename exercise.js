"use strict";

// Solution 1
const moveZeros = arr => {
  // TODO: Program me
  let zeroArr = [];

  let filteredArr = arr.filter(item => {
    if (item === 0) {
      zeroArr.push(item);
    }

    return (item !== 0);
  });
  
  return [...filteredArr, ...zeroArr];
};

// Solution 2
const moveZeros = arr => {
  return [
    ...(arr.filter(n => n !== 0)),
    ...(arr.filter(n => n === 0))
  ];
};