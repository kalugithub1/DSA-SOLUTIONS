//Given a number 'n', find the first elements of the Fibonacci sequence

function fibonacci(n) {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log("Fibonacci Results:");
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
console.log(fibonacci(20));

//Big-O =O(n)

// Given an integer 'n', find the factorial of that integer
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log("Factorial Results:");
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); //120

//Big-O =O(n)

// Given a natural number 'n' determine if the number is prime or not
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % 2 === 0) {
      return false;
    }
  }
  return true;
}

console.log("isPrime Results:");
console.log(isPrime(1)); //false
console.log(isPrime(5)); //true
console.log(isPrime(4)); //false
