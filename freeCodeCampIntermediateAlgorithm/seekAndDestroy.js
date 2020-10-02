/*
    Seek and Destroy

    You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
    Note
    You have to use the arguments object.
*/
function destroyer(arr) {
    // console.log(arr)
    let nonDestroyed = [];
    // store the arguments in an array
    const argumentsArr = [...arguments];
    // delete the first position
    argumentsArr.shift();
    outer: for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        for (let k = 0; k < argumentsArr.length; k++) {
            if (arr[i] === argumentsArr[k]) {
                continue outer;
            }
        }
        nonDestroyed.push(arr[i]);
    }

    return nonDestroyed;
}

console.log(destroyer(["tree", "hamburger", 53], "tree", 53))
