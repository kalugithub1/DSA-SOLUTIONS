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

//Given an array of 'n' elements and a target element 't', find the index  of 't' in the array. Return -1 if the target element is not found.

//LINEAR SEARCH

function linearSearh(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log("LinearSearch:");
console.log(linearSearh([-5, 2, 10, 4, 6], 10)); //2
console.log(linearSearh([-5, 2, 10, 4, 6], 6)); //4
console.log(linearSearh([-5, 2, 10, 4, 6], 20)); //-1

//Big-O =O(n)

//Given an array of 'n' elements and a target element 't', find the index  of 't' in the array. Return -1 if the target element is not found.

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
      return middleIndex;
    } else if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log("binarySearch:");
console.log(linearSearh([-5, 2, 10, 4, 6], 10)); //2
console.log(linearSearh([-5, 2, 10, 4, 6], 6)); //4
console.log(linearSearh([-5, 2, 10, 4, 6], 20)); //-1

//Big-O = O(logn)

//With existing Duplicates
//Find First Occurrence

function firstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      result = mid;
      right = mid - 1; // keep searching left
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

console.log("First Occurrence:");
console.log(firstOccurrence([1, 2, 2, 2, 3], 2));

//Find Last Occurrence

function lastOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      result = mid;
      left = mid + 1; // keep searching right
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

console.log("Last Occurrence:");
console.log(lastOccurrence([1, 2, 2, 2, 3], 2));

//Count Number of Occurrences

function countOccurrences(arr, target) {
  let first = firstOccurrence(arr, target);
  let last = lastOccurrence(arr, target);

  if (first === -1) return 0;

  return last - first + 1;
}

console.log("Count:");
console.log(countOccurrences([1, 2, 2, 2, 3], 2));
