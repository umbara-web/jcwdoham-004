// No.1
function triangle(n) {
  let count = 1;
  let message = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      message += count > 9 ? `${count} ` : `0${count} `;
      count++;
    }
    message += i == n ? '' : '\n';
  }

  return message;
}

console.log(triangle(4));

// No.2
function fizzBuzzGenerator(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    let output = '';
    if (i % 3 === 0) {
      output += 'Fizz';
    }
    if (i % 5 === 0) {
      output += 'Buzz';
    }
    if (output === '') {
      output = i;
    }
    result.push(output);
  }
  return result;
}
console.log(fizzBuzzGenerator(6));
console.log(fizzBuzzGenerator(15));

// No.3
function calculateBMI(weight, height) {
  // Memeriksa apakah input valid
  if (weight <= 0 || height <= 0) {
    return 'Invalid input: Weight and height must be positive numbers.';
  }

  // Menghitung BMI
  const bmi = weight / (height * height);

  // Menentukan kategori berat badan
  if (bmi < 18.5) {
    return 'less weight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'ideal';
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return 'overweight';
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    return 'very overweight';
  } else {
    return 'obesity';
  }
}

console.log(calculateBMI(20, -1)); // Output: Invalid input: Weight and height must be positive numbers.
console.log(calculateBMI(-1, 1.65)); // Output: Invalid input: Weight and height must be positive numbers.
console.log(calculateBMI(50, 1.75)); // Output: less weight
console.log(calculateBMI(70, 1.75)); // Output: ideal
console.log(calculateBMI(85, 1.75)); // Output: overweight
console.log(calculateBMI(95, 1.75)); // Output: very overweight
console.log(calculateBMI(130, 1.75)); // Output: obesity

// No.4
const getEvenNumbers = (numbers) => {
  const evenArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenArray.push(numbers[i]);
    }
  }
  return evenArray;
};

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbersArray = getEvenNumbers(originalArray);

console.log('Even Number is : ', evenNumbersArray); // Output: Even Number is : [2, 4, 6, 8, 10]

// No.5
function splitString(str) {
  return str.split(' ');
}

const exampleString = 'Hello World';
const wordsArray = splitString(exampleString);

console.log(wordsArray); // Output: ["Hello", "World"]
