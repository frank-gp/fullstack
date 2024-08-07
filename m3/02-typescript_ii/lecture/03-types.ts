interface IAdress {
  street: string;
  city: string;
}

// interface IUser {
//   name: string;
//   age: number;
//   email: string;
//   active: boolean;
//   address: IAdress;
// }

// const usuario: IUser = {
//   name: "Jorge Vega",
//   age: 32,
//   email: "jvega@me.com",
//   active: true,
//   address: {
//     street: "123 Main St",
//     city: "San Diego",
//   },
// }

enum UserRole {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

type TUser = {
  name: string;
  age: number;
  email: string;
  active: boolean;
  address: IAdress;
  role: UserRole; // "admin", "user", "guest"
};

const user11: TUser = {
  name: "Jorge Vega",
  age: 32,
  email: "jvega@me.com",
  active: true,
  address: {
    street: "123 Main St",
    city: "San Diego",
  },
  role: UserRole.ADMIN,
};

console.log(user11);
