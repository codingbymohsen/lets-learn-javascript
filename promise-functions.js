const users = [{ id: 1, name: "ali", title: "hello" }];

async function sayHello(message) {
  //log user

  const user = users.filter((u) => u.id == message.id);
  const result = await findUser({ id: message.id });
  console.log(result);
  //   console.log(user);
}
async function findUser(data) {
  //create a conntion to database
  //find user by id
  //if found
  const result = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users.filter((u) => u.id == data.id));
    }, 1000);
  });
  return result;
}

async function start() {
  const start = new Date().getTime();
  sayHello("hi");
  sayHello({ id: 1, name: "ali", title: "hello" });
  sayHello({ id: 2 });
  const end = new Date().getTime();
  console.log("in function ", end - start);
}

const s = new Date().getTime();
sayHello("hi");
sayHello({ id: 1, name: "ali", title: "hello" });
sayHello({ id: 2 });
const end = new Date().getTime();
console.log("out of function", end - s);

start();
