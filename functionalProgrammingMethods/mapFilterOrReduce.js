/*
    Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

    We have defined a function named squareList. You need to complete the code for the squareList function using any combination of map(), filter(), and reduce() so that it returns a new array containing only the square of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2].
*/
// create a new array containing only the positive numbers
// decimal numbers are not integers
// decimal numbers and negative number should not be included in the final array
// Methods to use: map, filter, reduce

const squareList = (arr) => {
    // get negative numbers out of the array
    let noNegativeNumbers = arr.filter(num => num > 0);

    // create an array based on the noNegativeNumbers array that doesn't contain decimal numbers
    let wholeNumString = noNegativeNumbers.filter(item => {
        if (!item.toString().includes(".")) {
            return item;
        }
    });
    // create the returning array containing the square values
    let squareString = wholeNumString.map(sqr => sqr * sqr)
    return squareString;
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);

console.log(squaredIntegers);
