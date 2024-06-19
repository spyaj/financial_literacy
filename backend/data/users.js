import bcrypt from "bcryptjs";

const users = [
  {
    name: "John Doe",
    email: "john@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Steve Doe",
    email: "steve@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
