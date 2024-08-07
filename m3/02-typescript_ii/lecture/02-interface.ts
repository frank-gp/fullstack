interface IAdress {
  street: string;
  city: string;
}

interface IUser {
  name: string;
  age: number;
  email: string;
  active: boolean;
  address: IAdress;
}

const usuario: IUser = {
  name: "Jorge Vega",
  age: 32,
  email: "jvega@me.com",
  active: true,
  address: {
    street: "123 Main St",
    city: "San Diego",
  },
}



// const user = {
//   name: "Jorge Vega",
//   age: 32,
//   email: "jvega@me.com",
//   active: true,
//   address: {
//     street: "123 Main St",
//     city: "San Diego",
//   },
// };
