// No.1
function sumMixedArray(mixedArray) {
  return mixedArray.reduce((accumulator, currentValue) => {
    if (typeof currentValue === 'number' && !isNaN(currentValue)) {
      return accumulator + currentValue;
    }
    return accumulator;
  }, 0);
}

const mixedArray = ['3', 1, 'string', null, false, undefined, 2];
const result = sumMixedArray(mixedArray);

console.log(result); // Output: 3

// No.2
const insertWithMaxSize = (arr, maxSize, ...numbers) => {
  for (const num of numbers) {
    if (arr.length < maxSize) {
      arr.push(num);
    } else {
      console.warn('Maximum array size reached. Skipping remaining elements.');
      break;
    }
  }
};
let myNumbers = [];
const maxSize = 5;

insertWithMaxSize(myNumbers, maxSize, 5, 10, 24, 3, 6, 7, 8);
console.log(myNumbers);
// Output: [5, 10, 24, 3, 6]

// No.3
function combineArraysSpread(arr1, arr2) {
  return [...arr1, ...arr2];
}

// Example usage:
const arr1_spread = [1, 2, 3];
const arr2_spread = [4, 5, 6];
const combinedArraySpread = combineArraysSpread(arr1_spread, arr2_spread);
console.log(combinedArraySpread); // Output: [1, 2, 3, 4, 5, 6]

// No.4
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (const element of arr) {
    if (seen.has(element)) {
      duplicates.add(element);
    } else {
      seen.add(element);
    }
  }

  return [...duplicates];
}

const arr4 = [1, 2, 2, 2, 3, 3, 4, 5, 5];
const result4 = findDuplicates(arr4);

console.log(result4); // Output : [2, 3, 5]

// No.5
function arrayDifference(arr1, arr2) {
  const diff1 = arr1.filter((item) => !arr2.includes(item));
  const diff2 = arr2.filter((item) => !arr1.includes(item));
  return diff1.concat(diff2);
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const result1 = arrayDifference(arr1, arr2);

console.log(result1);
// Expected output: [1, 2, 6, 7]
