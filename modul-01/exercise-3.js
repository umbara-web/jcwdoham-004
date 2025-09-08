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
