const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  //   console.log(accumulator, currentValue);
  return accumulator + currentValue;
}, 0);

// console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

// ========== some ==========
const array = [1, 2, 3, 4, 5];

const evenExists = array.some(function (num) {
  //   return num % 2 === 0;
  return num == 6;
});

// console.log(evenExists); // Output: true, since at least one even number exists in the array

// ========== sort ==========
const fruits = ["banana", "apple", "orange", "pineapple"];
fruits.sort();
// console.log(fruits); // Output: ['apple', 'banana', 'orange', 'pineapple']

const numbersSort = [3, 1, 4, 1, 5, 9, 2, 6];
numbersSort.sort((a, b) => a - b); // Sort in ascending order
numbersSort.sort((a, b) => b - a); // Sort in desc order
// console.log(numbersSort); // Output: [1, 1, 2, 3, 4, 5, 6, 9]

// ========== every ==========
const ages = [18, 20, 25, 30];

const allAdults = ages.every(function (age) {
  //   return age >= 18;
  return age >= 18;
});

// console.log(allAdults); // Output: true, since all ages are 18 or greater

// ========== find ==========

const numbersFind = [1, 2, 3, 4, 5];

const evenNumber = numbersFind.find(function (num) {
  //   return num % 2 === 0;
  //   return num == 6; //undefinded
  return num == 5; // 5
});

console.log(evenNumber); // Output: 2, since 2 is the first even number in the array
