function setName(firstName, lastName) {
  return firstName + " " + lastName;
}

const firstName = "ali";
const lastName = "alipoor";
const name = setName(firstName, lastName);
const fullName = (fName, lName) => {
  return fName + " " + lName;
};
console.log(setName(firstName, lastName));
console.log(fullName(firstName, lastName));

//add new user => returns and ID
//add new Product for that user by its ID

//add new User
//log new event on user creation

filter((u)=>u.id==1)
function filter(f){
  f({id:1,name:"mohsen"})
}
function createUser(firstName, lastName, callback) {
  const id = Math.random();
  console.log(typeof callback);
  if (typeof callback == "function")
    callback(id, "param2", "param3", "param4", {}, {}, []);
}

function createProduct(userId, pName, ...args) {
  console.log(args);
  console.log("product created succesfully");
}
function logUser(userID) {
  console.log("user created. user id=" + userID);
}

createUser("ali", "alipoor", createProduct);
createUser("asdf", "alizade", logUser);
createUser("fName", "lName", (...args) => {
  console.log(args);
});
createUser("fName", "lName", "sdfsdf");

// const user = { fname: "amir hosein" };
// user.age = 12;
// console.log(user);

const color = "blue";
const skyColor = "blue";
const myFavoriteColor = "yellow";

/*
____________
blue
____________
blue
____________
yellow
____________
____________
____________
____________

____________
____________
____________
____________
____________

*/

function myFunction() {}
/*
_____________
    f1        |
f2            |  
        f3    |    
_____________

*/

/*
stack
_____________
f1 f2 f3 f4 f5|
              |  
              |    
_____________

*/
