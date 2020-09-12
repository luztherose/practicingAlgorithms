/*
    Falsy Bouncer
    Remove all falsy values from an array.
    Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
    Hint: Try converting each value to a Boolean.
 */
function bouncer(arr) {
    // go thr the array to find the falsy values
    // Remove all falsy values from the given array
    // return the array without falsy values
    let nonfalsyValueArray =[];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== false && arr[i] !== null && arr[i] !== 0 && arr[i] !== "" && arr[i] !== undefined && !Number.isNaN(arr[i])   ) {
            nonfalsyValueArray.push(arr[i]);
        }
    }
    return nonfalsyValueArray;
    
}

bouncer([7, "ate", "", false, 9]);
