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
