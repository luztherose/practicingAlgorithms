/*
    Use the every Method to Check that Every Element in an Array Meets a Criteria
    The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not.
*/
// Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.

function checkPositive(arr) {
    // Only change code below this line
    // check if every element element in the array is a     positive number. 
    // if the number is greater than 0 is positive (num > 0)
    return arr.every(function (currentValue) {
        return currentValue > 0;
    });
    // Only change code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5]))

