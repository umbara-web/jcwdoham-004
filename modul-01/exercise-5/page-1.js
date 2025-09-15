// No.1
// Function without using sort()
function getStatsWithoutSort(arr) {
  if (arr.length === 0) {
    return null; // Or handle as needed
  }

  let lowest = arr[0];
  let highest = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    if (currentNum < lowest) {
      lowest = currentNum;
    }
    if (currentNum > highest) {
      highest = currentNum;
    }
    sum += currentNum;
  }

  const average = sum / arr.length;
  return {
    lowest: lowest,
    highest: highest,
    average: average,
  };
}

// Function using sort()
function getStatsWithSort(arr) {
  if (arr.length === 0) {
    return null; // Or handle as needed
  }

  const sortedArr = [...arr].sort((a, b) => a - b);
  const lowest = sortedArr[0];
  const highest = sortedArr[sortedArr.length - 1];

  const sum = arr.reduce((acc, current) => acc + current, 0);
  const average = sum / arr.length;

  return {
    lowest: lowest,
    highest: highest,
    average: average,
  };
}

const arr = [12, 5, 23, 18, 4, 45, 32];

const statsWithoutSort = getStatsWithoutSort(arr);
console.log(
  `Without sort(): { lowest: ${statsWithoutSort.lowest}, highest: ${
    statsWithoutSort.highest
  }, average: ${statsWithoutSort.average.toFixed(3)} }`
);

const statsWithSort = getStatsWithSort(arr);
console.log(
  `With sort(): { lowest: ${statsWithSort.lowest}, highest: ${
    statsWithSort.highest
  }, average: ${statsWithSort.average.toFixed(3)} }`
);

// No.2
function formatList3(arr) {
  if (arr.length === 0) {
    return '';
  }
  if (arr.length === 1) {
    return arr[0];
  }

  const lastWord = arr.pop();
  return arr.join(', ') + ' and ' + lastWord;
}

const words3 = ['apple', 'banana', 'cherry', 'date'];
console.log(formatList3(words3)); // Output: "apple, banana, cherry, and date"
console.log(words3); // The original array is mutated: ["apple", "banana", "cherry"]

// No.3
function findSecondSmallest(numbers) {
  if (numbers.length < 2) {
    return 'Array must contain at least two numbers.';
  }
  const sortedNumbers = numbers.sort((a, b) => a - b);
  return sortedNumbers[1];
}

const numbers = [5, 3, 1, 7, 2, 6];
const secondSmallest = findSecondSmallest(numbers);

console.log(secondSmallest);

// No.4
function sumArraysByPosition(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  return result;
}

// Example usage:
const arrayA = [1, 2, 3];
const arrayB = [3, 2, 1];
const sumResult = sumArraysByPosition(arrayA, arrayB);
console.log(sumResult);

// No.5
function addUniqueElement(arr, newElement) {
  if (!arr.includes(newElement)) {
    arr.push(newElement);
  }
  return arr;
}

// Example 1:
let arr1 = [1, 2, 3, 4];
const result1 = addUniqueElement(arr1, 4);
console.log(result1);
// Expected output: [1, 2, 3, 4]

// Example 2:
let arr2 = [1, 2, 3, 4];
const result2 = addUniqueElement(arr2, 7);
console.log(result2);
// Expected output: [1, 2, 3, 4, 7]
