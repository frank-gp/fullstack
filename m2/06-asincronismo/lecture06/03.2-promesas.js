const promesaResuelta = new Promise((resolve, reject) => {
  // empty <pending>
  resolve("resolve 111");
});

console.log(promesaResuelta);

const promesaRechazada = new Promise((resolve, reject) => {
  // empty <pending>
  reject("reject 222");
});

console.log(promesaRechazada);
