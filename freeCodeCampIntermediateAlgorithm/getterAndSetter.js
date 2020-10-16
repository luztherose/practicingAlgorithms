/*
    Make a Person
    
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
    The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

*/
const Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    // fist and last name 
    const inputStr = firstAndLast.split(/\s/);
    let first = inputStr[0];
    let last = inputStr[1];

    this.getFirstName = function () {
        return first;
    };
    this.getLastName = function () {
        return last;
    };

    this.getFullName = function () {
        console.log(first)
        return `${this.getFirstName()} ${this.getLastName()}`;
    };
    // The set syntax binds an object property to a function to be called when there is an attempt to set that property.

    this.setFirstName = function (value) {
        first = value;
    }
    this.setLastName = function (value) {
        last = value;
    }

    this.setFullName = function (value) {
        const inputStr = value.split(/\s/);
        first = inputStr[0];
        last = inputStr[1];
    }


};

const bob = new Person("Bob Ross");
console.log(bob.getFirstName())
console.log(bob.getLastName())
console.log(bob.getFullName())
bob.setFirstName("Haskell")
console.log(bob.getFullName())
