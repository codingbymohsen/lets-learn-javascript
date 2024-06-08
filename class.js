//classes is used for create a template of an object
class User {
  fName;
  lName;
  age;
  constructor(params) {}

  buildFullName() {
    return this.fName + " " + this.lName;
  }
}

const myUser = new User();
myUser.age = 12;
myUser.fName = "ahmad";
myUser.lName = "ahmad poor";
myUser.nationalId = 123123123;
const fullName = myUser.buildFullName();
console.log(myUser);
console.log(fullName);
