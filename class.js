//classes is used for create a template of an object
//100 html -> 1js -> 1css
//repeativie code
// manage change on code and logics

//inheritance a-> b:a -> b==a
//encapsulation
//polymorphism
class User {
  fName;
  lName;
  age;

  #fullName;
  constructor(params) {}

  buildFullName() {
    this.fullName = this.fName + " " + this.lName;
    return this.fullName;
  }

  buildFullName(...x) {
    console.log(x);
  }
  buildFullName(firstName, lastName) {}
  buildFullName(fullName) {}
}

const myUser = new User();
myUser.age = 12;
myUser.fName = "ahmad";
myUser.lName = "ahmad poor";
myUser.nationalId = 123123123;

myUser.fullName = "full name";
const fullName = myUser.buildFullName();
myUser.buildFullName("firstName", "lastName");
myUser.buildFullName("sdf", "sdfsdf", 111, 222, 333, 4444);
console.log(myUser);
console.log(fullName);
