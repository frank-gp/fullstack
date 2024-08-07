const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const binarySearch = (array, target) => { //target = 1
  let left = 0;
  let right = array.length - 1; // 20

  while (left <= right) { // 0 <= 20
    let middle = Math.floor((left + right) / 2); // Match.floor((0 + 20) / 2) = 10

    if (array[middle] === target) { // 12 === 1 => FALSE
      return `El numero ${target} se encuentra en la posicion ${middle}`;
    }
    if (array[middle] < target) { // 12 < 1 => FALSE
      left = middle + 1;
    } else {
      right = middle - 1; // 10 - 1 = 9
    }
  }
  return `El numero ${target} no se encuentra en la lista`;
};

console.log(binarySearch(list, 111));
console.log(binarySearch(list, 1));
console.log(binarySearch(list, 20));
