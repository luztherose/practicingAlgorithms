/*
    Drop it
    Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

    Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/
function dropElements(arr, func) {
    let indexValue;
    // get the index where the iterated element return true
    const isTrue = arr.some((item, index) => {
        // console.log(index)
        if (func(item)) {
            indexValue = index;
            return true;

        }
    });
    // evalute the result to be returned
    if (isTrue) {
        return arr.slice(indexValue);
    } else {
        return [];
    }
}

console.log(dropElements([1, 2, 3], function (n) { return n > 0; }));
