// Combine Two Arrays Using the concat Method

/**
    Concatenation means to join items end to end. JavaScript offers the concat method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. 

    Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array
 */
function nonMutatingConcat(original, attach) {
    // Only change code below this line
    let concatinatedArr = original.concat(attach)
    return concatinatedArr;
    // Only change code above this line
}
let first = [1, 2, 3];
let second = [4, 5];

console.log(nonMutatingConcat(first, second))