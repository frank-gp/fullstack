function subSetSum(nums, target) {
  let sums = new Set([0]);

  for (let num of nums) {
    const sumsCopy = [...sums];

    for (let sum of sumsCopy) {
      const newSum = num + sum;
      if (newSum <= target) {
        return true;
      }
      console.log(sums)
      sums.add(newSum);
    }
  }

  return false;
}

console.log(subSetSum([1, 2, 3, 4, 5, 6], 50));

// function subSetSum(array, sum) {
//     let result = false;
//     let table = new Array(array.length + 1).fill(false);

//     for (let i = 0; i < table.length; i++) {
//       table[i] = new Array(sum + 1).fill(false);
//     }

//     for (let i = 0; i < table.length; i++) {
//       table[i][0] = true;
//     }

//     for (let i = 1; i < table.length; i++) {
//       for (let j = 1; j < table[0].length; j++) {
//         if (j < array[i - 1]) {
//           table[i][j] = table[i - 1][j];
//         } else {
//           table[i][j] = table[i - 1][j] || table[i - 1][j - array[i - 1]];
//         }
//       }
//     }

//     return table[table.length - 1][table[0].length - 1];
//   }
