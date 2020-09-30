/*
    Use the some Method to Check that Any Elements in an Array Meet a Criteria

    The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.
*/
//Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.

function checkPositive(arr) {
    // Only change code below this line
    // check if at least one of the element in the array is a positive number.
    return arr.some((num) => {
        return num > 0;
    }); 
    
      // Only change code above this line
    }
    console.log(checkPositive([1, 2, 3, -4, 5]))
    