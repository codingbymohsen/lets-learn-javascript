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

//resolve example
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
  resolve(1);
});

async function main() {
  const result = await p;
  console.log(result);

  let promise = new Promise(function (resolve, reject) {
    // executing (the producing code)
  });

  // There can be only a single result or an error
  // All further calls of resolve and reject are ignored
  // Also, resolve/reject expect only one argument (or none) and will ignore additional arguments.
  let promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Done"), 2000);
    setTimeout(() => reject(new Error("Whoops!")), 2000);
    resolve("done");
  });
  promise1.then(
    (result) => console.log(result),
    (reject) => console.log(reject)
  );

  let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Success"), 3000);
  });
  // promise2.then(console.log)
  promise2.then((result) => console.log(result));

  let promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(), 4000);
  })
    .catch((reason) => {})
    .then((value) => {})
    .finally(() => {});

  promise3.catch((err) => console.log("err", err));
  promise3.finally(() => console.log("Finally"));
  // The call .catch(f) is a complete analog of .then(null, f), it’s just a shorthand.
  // promise3.catch(console.log)
}
main();
