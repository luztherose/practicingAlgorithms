/*
    Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*/
function addTogether() {
    // determine how many arguments have been passed
    // if the func receives 2 arguments sum them together.
    // If only one argument is provided, then return a function that expects one argument and returns the sum
    // If either argument isn't a valid number, return undefined.
    const argsArr = [...arguments]
    console.log(argsArr)
    //confirm that two arguments have been passed
    if (argsArr.length === 2) {
        const arg1 = argsArr[0];
        const arg2 = argsArr[1];
        // make sure that the arguments are numbers
        if (typeof (arg1) === "number" && typeof (arg2) === "number") {
            return arg1 + arg2;
        } else {
            return undefined;
        }
    } else {
        let arg = argsArr[0];
        if (typeof (arg) !== "number") {
            return undefined;
        } else {
            return function (newval) {
                if (typeof (newval) !== "number") {
                    return undefined;
                }
                return arg + newval;
            }

        };
    }

}
console.log(addTogether("http://bit.ly/IqT6zt"))
