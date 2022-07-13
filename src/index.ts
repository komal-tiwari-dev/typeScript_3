interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

function getType(obj:User|Admin):string{
    return obj.type
}

const Users1st :User={
    type:"user",
    name:"Masai",
    age:3,
    occupation:"Teaching"
}

console.log(getType(Users1st))
