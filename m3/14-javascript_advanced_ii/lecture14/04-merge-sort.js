// https://visualgo.net/en/sorting?slide=1

const list = [12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let div = dividir(array);
  let left = div[0];
  let right = div[1];

  return merge(mergeSort(left), mergeSort(right));
}

function dividir(array) {
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  return [left, right];
}

function merge(left, right) {
  let array = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }

  // return array.concat(left, right);

  while (left.length) {
    array.push(left.shift());
  }

  while (right.length) {
    array.push(right.shift());
  }
  return array;
}

console.log(mergeSort(list));
