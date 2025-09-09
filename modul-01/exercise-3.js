// No.1
const input = 9;
const limit = 10;
for (let i = 1; i <= limit; i++) {
  console.log(input, 'x', i);
}

// No.2
let isPalindrome1 = 'madam';
switch (isPalindrome1) {
  case 'madam':
    console.log('Palindrome');
    break;
  default:
    console.log('Not Palindrome');
}

let isPalindrome2 = 'miss';

if (isPalindrome2 === 'madam' || isPalindrome2 === 'mister') {
  console.log('Palindrome');
} else {
  console.log('Not Palindrome');
}

// No.3
function convertCmToKm(centimeters) {
  const kilometers = centimeters / 100000;
  return kilometers;
}

const cmValue = 100000;
const kmValue = convertCmToKm(cmValue);

console.log(`${cmValue} cm = ${kmValue} km`);

// No.4
const rupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(number);
};

console.log(rupiah(1000));
console.log(rupiah(200000));

// No.5
const originalString = 'Hello world';
const searchString = 'ell';

const newString = originalString.replace(searchString, '');

console.log(newString);

// No.6
function capitalizeFirstLetter(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function capitalizeEachWord(sentence) {
  return sentence
    .split(' ')
    .map((word) => capitalizeFirstLetter(word))
    .join(' ');
}

console.log(capitalizeEachWord('hello world'));

// No.7
function swapCase(str) {
  return str
    .split('')
    .map((char) => {
      if (char === char.toLowerCase()) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join('');
}

const inputString = 'The QuiCk BrOwN Fox';
const outputString = swapCase(inputString);

console.log(outputString);

// No.8
let num1 = 42;
let num2 = 27;
let largestNumber;

if (num1 > num2) {
  largestNumber = num1;
} else {
  largestNumber = num2;
}

console.log('The largest number is : ' + largestNumber);

// No.9
// let num4 = 42;
// let num5 = 27;
// let num6 = 18;

let numbers = [42, 27, 18];

numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers.join(', '));

// Variabel
let num7 = 42;
let num8 = 27;
let num9 = 18;

// Kondisional untuk memeriksa urutan
if (num7 <= num8 && num8 <= num9) {
  console.log(num7 + ', ' + num8 + ', ' + num9);
} else if (num7 <= num9 && num9 <= num8) {
  console.log(num7 + ', ' + num9 + ', ' + num8);
} else if (num8 <= num7 && num7 <= num9) {
  console.log(num8 + ', ' + num7 + ', ' + num9);
} else if (num8 <= num9 && num9 <= num7) {
  console.log(num8 + ', ' + num9 + ', ' + num7);
} else if (num9 <= num7 && num7 <= num8) {
  console.log(num9 + ', ' + num7 + ', ' + num8);
} else {
  console.log(num9 + ', ' + num8 + ', ' + num7);
}

// No.10
function checkType(input) {
  if (typeof input === 'string') {
    return 1;
  } else if (typeof input === 'number') {
    return 2;
  } else {
    return 3;
  }
}

console.log(checkType('hello')); // Output: 1
console.log(checkType(123)); // Output: 2
console.log(checkType(true)); // Output: 3
console.log(checkType({})); // Output: 3
console.log(checkType(null)); // Output: 3 (Note: typeof null is "object")
console.log(checkType(undefined)); // Output: 3

// No.11
function replaceAWithAsterisk(inputString) {
  return inputString.replaceAll('a', '*').replaceAll('A', '*');
}

const originalString1 = 'An apple a day keeps the doctor away';
const modifiedString1 = replaceAWithAsterisk(originalString1);
console.log(modifiedString1); // Output: *n *pple * d*y keeps the doctor *w*y
