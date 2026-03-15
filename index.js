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

//Find the nth Fibonacci number

function fibonacci(n) {
  if (n <= 1) return n;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}
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
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("isPrime Results:");
console.log(isPrime(1)); //false
console.log(isPrime(5)); //true
console.log(isPrime(9)); //false

//Big-O =O(n)

//isPrime Fuction Optimized

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log("isPrime Results:");
console.log(isPrime(1)); //false
console.log(isPrime(5)); //true
console.log(isPrime(4)); //false

//Big-O =O(sqrt(n))

// Given a positive integer 'n', determine if the number is a power of 2 or not

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log("isPowerOfTwo Results:");
console.log(isPowerOfTwo(1)); //true
console.log(isPowerOfTwo(2)); //true
console.log(isPowerOfTwo(5)); //false

//Big-O = O(logn)

//Optimized isPowerOfTwo function
function isPowerOfTwoBitwise(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

console.log("isPowerOfTwoBitwise Results:");
console.log(isPowerOfTwoBitwise(1)); //true
console.log(isPowerOfTwoBitwise(2)); //true
console.log(isPowerOfTwoBitwise(5)); //false

//Big-O = O(1)
