/*
    Add Elements to the End of an Array Using concat Instead of push

    Functional programming is all about creating and using non-mutating functions.
    The last challenge introduced the concat method as a way to combine arrays into a new one without mutating the original arrays. Compare concat to the push method. Push adds an item to the end of the same array it is called on, which mutates that array.
    Concat offers a way to add new items to the end of an array without any mutating side effects.
*/
// Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array.

function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.concat(newItem);
    // Only change code above this line
}
let first = [1, 2, 3];
let second = [4, 5];
console.log(nonMutatingPush(first, second))
