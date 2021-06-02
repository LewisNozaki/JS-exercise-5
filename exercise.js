"use strict";

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
}