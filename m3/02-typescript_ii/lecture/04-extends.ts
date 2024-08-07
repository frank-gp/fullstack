interface User {
  name: string;
  age: number;
  email: string;
}

interface AdminUser extends User {
  adminSince: Date;
}

interface GuestUser extends User {
  active: boolean;
}

const user1: AdminUser = {
  name: "Jorge Vega",
  email: "jvega@me.com",
  age: 32,
  adminSince: new Date(),
};
