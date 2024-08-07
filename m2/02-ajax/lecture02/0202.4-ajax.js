const addUserButton = document.querySelector("#addUserButton");
let item = 1;

class User {
  constructor(id, name, username, email) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
  }
}

class Repository {
  constructor() {
    this.users = [];
  }

  createUser({ id, name, username, email }) {
    const newUser = new User(id, name, username, email);
    this.users.push(newUser);
  }
}

const repository = new Repository();

const refresh = () => {
  const usersContainer = document.getElementById("usersContainer");
  usersContainer.innerHTML = "";

  const users = repository.users;

  const htmlUsers = users.map((user) => {
    const name = document.createElement("h3");
    const email = document.createElement("p");

    name.innerHTML = user.name;
    email.innerHTML = user.email;

    const card = document.createElement("div");
    card.appendChild(name);
    card.appendChild(email);

    return card;
  });

  usersContainer.append(...htmlUsers);
  // htmlUsers.forEach((value) => usersContainer.appendChild(value));
};

function addUser() {
  if (item > 10) return alert("no hay mas usuarios");

  $.get(`https://jsonplaceholder.typicode.com/users/${item}`, (data, status) => {
    item++;
    repository.createUser(data);
    refresh();
    console.log(repository.users);
  });
}

addUserButton.addEventListener("click", addUser);
