/*
    Sorted Union
    Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
    In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
    The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/
function uniteUnique(arr) {
    // store the arguments
    const argumentsArr = [...arguments];
    // create a new array of unique values
    // keep the original order 
    // no duplicate values
    // the uniqueValues array will always contain the values of the first array argument
    const allValues = [...arr];
    // unique values array 
    const uniqueValues = [...arr];

    for (let i = 1; i < argumentsArr.length; i++) {
        allValues.push(...argumentsArr[i])
    }
    //console.log(allValues);
    //console.log(allValues);
    outer: for (let i = 0; i < allValues.length; i++) {

        for (let k = 0; k < uniqueValues.length; k++) {

            if (allValues[i] === uniqueValues[k]) {
                //console.log(allValues[i] + ":"+ uniqueValues[k])
                continue outer;
            }
        }
        uniqueValues.push(allValues[i]);
    }
    return uniqueValues;
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
