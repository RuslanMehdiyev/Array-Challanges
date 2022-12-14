//Task 1

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

let unionArrays = [...array1, ...array2];
console.log(unionArrays);

//Task 2

let myArray = [1, 2, NaN, undefined, null, "", 0, false, 3, 4];
function removeNegative(array) {
  return array.filter((item) => item);
}
console.log(removeNegative(myArray));

//Task 3

function array_filled(arrLength, index) {
  let emptyArray = [];
  for (let i = 0; i < +arrLength; i++) {
    emptyArray.push(index);
  }
  return emptyArray;
}

console.log(array_filled(5, 0));

//Task 4

function move(arr, fromIndex, to) {
  let foundEl = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(to, 0, foundEl);
  return arr;
}
console.log(move([10, 20, 30, 40, 50], 1, 2));

//Task 5

function array_range(startEl, lengthEl) {
  let arr = [];
  for (let i = startEl; i <= lengthEl; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(array_range(1, 5));

//Task 6

function isPrime(arr) {
  let res = [];
  arr.filter((number) => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        res.push(number);
      }
    }
  });
  console.log(res);
  if (res.length) {
    return false;
  } else {
    return true;
  }
}
let array = [2, 3, 5, 7];
console.log(isPrime(array));

//Task 7

function uniqueEl(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}
let getUniqueFrom = [1, 2, 2, 3, 4, 4, 5, 5, 1, 6];
console.log(uniqueEl(getUniqueFrom));

//Task 8

function uniqueFromTwoArray(array1, array2) {
  let together = [...array1, ...array2];
  let result = [];
  for (let i = 0; i < together.length; i++) {
    if (!result.includes(together[i])) {
      result.push(together[i]);
    }
  }
  return result;
}
let firstArray = [1, 2, 3];
let secondArray = [100, 2, 1, 10];
console.log(uniqueFromTwoArray(firstArray, secondArray));

//Task 9

function differenceOfTwoArrays(array1, array2) {
  let result = array1
    .filter((e) => !array2.includes(e))
    .concat(array2.filter((e) => !array1.includes(e)));
  return result;
}
let arrayFirst = [1, 2, 3];
let arraySecond = [100, 2, 1, 10];
console.log(differenceOfTwoArrays(arrayFirst, arraySecond));

//Task 10

function shuffle(array) {
  array.sort(() => 0.5 - Math.random());
  return array;
}
let arrayForShuffle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffle(arrayForShuffle));
