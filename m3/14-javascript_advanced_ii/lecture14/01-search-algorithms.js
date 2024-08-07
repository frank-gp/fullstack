const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return `El numero ${target} se encuentra en la posicion ${i}`;
    }
  }
  return `El numero ${target} no se encuentra en la lista`;
};

console.log(linearSearch(list, 111));
console.log(linearSearch(list, 1));
console.log(linearSearch(list, 20));
