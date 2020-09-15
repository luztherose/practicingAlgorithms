/*
    Chunky Monkey
    Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
    //splits the array(first argument) into small groups
    // the size of the groups are indicated by the second argument(size)
    // each group should be and array
    // return the arrays as a two-dimensional array.
    let count = 0;
    let arrLength = arr.length;
    let twoDimentionalArray = [];
    for(let i = 0; i < arrLength; i++) {
        if (count < size) {
            twoDimentionalArray.push(arr.splice(0, size));
            if(arr.length === 0) {
                break;
        }
        }
    }
    return twoDimentionalArray;
}

//chunkArrayInGroups(["a", "b", "c", "d"], 2);
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)