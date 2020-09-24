// 1. What are the primitive types? What are the non primitive types?
// string, number, boolean, array, object
// primitive - not changeable (string, number, boolean, null, undefine, symbol, NaN)
// non-primitive - changeable (array, object)
​
// 2. What is a truthy value?
// something that evaluates to true
// 1 is true in boolean as a value
// 1 == '1' evaluate to be true
// 'good' === 'good' evaluate to be true
​
// 3. What is the difference between assignment by reference and assignment by value?
const item1 = 123; //assignment by value
const item2 = item1;  // assignment by reference, only exist for item1 to refer to the memory address
​
// 4. What are the two roles of the return keyword in JavaScript?
// one, exit a function
// two, produce a value to be used later
​
// 5. What's the difference between an expression and a statement?
// expression evaluates to a value
// statement is like an instruction that doesn't return a value
​
// 6. What's the difference between a parameter and an argument?
// parameters are in () as a placeholder that can be used inside of a function
// arguments are variable inside of a function provided by the function call
function doThisNow(thing1, thing2) {
    const result = thing1 + thing2;
  // thing1 = 55 (is an argument);
​
    return result;
}
​
doThisNow(55, 79);
​
// 7. Given this function and function call, what will be the value of the user ?
// undefined, because the function did not receive an argument or the parameter `user` is undefined
​
// 8. Is this valid syntax and why?
{  // new statement scope
  // console.log('How are you today?');
  // if (happy === true) {
  //   alert('I AM FINE, THANK YOU');
  // }
}
// but `happy` is undefined
​
// 9. What are three reasons the global scope is bad?
// one, override variables being declared in the global scope in other scope
// two, run into conflict with third-party libraries (underscore, lo-dash)
// three, execution time may be longer when accessing the global scope from a nested private function
// other, if too many functions are being defined then it will take longer to load the script in the beginning
​
// 9a. What are some reasons that the local scope is bad?
// it is restrictive
​
// 10. What will the value of output be here:
const loadApp = () => {  // 2
  const appName = 'Pizza Delivery App';  // 6
  const getAppName = () => {  // 4
    return appName;  // 5
    }
  return getAppName(); // 3
}
​
const output = loadApp();  // 1
// output is 'Pizza Delivery App'
​
// 11. What will be the value of address here?
// 483 Queen Street West is the address
​
// 12. What is a callback function?
// it is a function pass to another function as an argument, which will be called later
const higherOrderFunction = callback => {
    callback();
}
​
higherOrderFunction(() => console.log('hi'));