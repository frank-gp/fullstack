// https://visualgo.net/en/sorting?slide=1-2

const list = [12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function bubbleSort(array) {
  let change = true;

  while (change) {
    change = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        change = true;
      }
    }
  }

  return array;
}

console.log(bubbleSort(list));
