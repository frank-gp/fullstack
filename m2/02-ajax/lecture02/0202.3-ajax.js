const addUserButton = document.querySelector("#addUserButton");

let userNum = 1;

function addUser() {
  if (userNum > 10) return alert("no hay mas usuarios");

  $.get("https://jsonplaceholder.typicode.com/users/" + userNum, (data, status) => {
    console.log(data);
  });
  userNum++;
}

addUserButton.addEventListener("click", addUser);
