// No.1
const array1 = [
  { name: 'Student 1', email: 'student1@mail.com' },
  { name: 'Student 2', email: 'student2@mail.com' },
];

const array2 = [
  { name: 'Student 1', email: 'student1@mail.com' },
  { name: 'Student 3', email: 'student3@mail.com' },
];
function mergeAndRemoveDuplicates(array1, array2) {
  const studentMap = new Map();

  array1.forEach((student) => {
    studentMap.set(student.email, student);
  });

  array2.forEach((student) => {
    studentMap.set(student.email, student);
  });

  return Array.from(studentMap.values());
}

const result = mergeAndRemoveDuplicates(array1, array2);

console.log(result);

// No.2
const input = [{ name: 'David', age: 20 }];
const swapKeysAndValues = (arr) => {
  if (!Array.isArray(arr)) {
    console.error('Input is not an array.');
    return [];
  }

  return arr.map((obj) => {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }

    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [value, key])
    );
  });
};

const output = swapKeysAndValues(input);

console.log(output);

// No.3
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

function displayFactorial(n) {
  const result = factorial(n);

  let multiplicationString = '';
  for (let i = n; i >= 1; i--) {
    multiplicationString += i;
    if (i > 1) {
      multiplicationString += ' x ';
    }
  }

  console.log(`${n}! = ${multiplicationString} = ${result}`);
  return result;
}

displayFactorial(5);
