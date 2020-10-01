/*
    Diff Two Arrays

    Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
    Note
    You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    // check if one of the elements in the one of the array is not found in the other array.
    // if element is not found return a new array with those elements.
    const newArr = [];
    outer: for (let i = 0; i < arr1.length; i++) {
        //console.log(arr1[i])
        for (let k = 0; k < arr2.length; k++) {
            console.log(`outer ${arr1[i]} inner ${arr2[k]}`)
            if (arr1[i] === arr2[k]) {
                continue outer;
            }
        }
        newArr.push(arr1[i])
    }

    outer: for (let i = 0; i < arr2.length; i++) {
        //console.log(arr1[i])
        for (let k = 0; k < arr1.length; k++) {
            if (arr2[i] === arr1[k]) {
                continue outer;
            }
        }
        newArr.push(arr2[i])
    }

    return newArr;
}

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]))
