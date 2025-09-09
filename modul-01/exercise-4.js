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
