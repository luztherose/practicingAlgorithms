/*
    Steamroller
    Flatten a nested array. You must account for varying levels of nesting.

    Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
 */
function steamrollArray(arr) {

    const arrValues = [...arr];
    const storevals = []; // store the final values

    // delete some nested array
    for (let i = 0; i < arrValues.length; i++) {
        if (Array.isArray(arrValues[i])) {
            storevals.push(...arrValues[i]);
        } else {
            storevals.push(arrValues[i]);
        }
    }
    // delete some nested array
    let i = 0;
    while (i <= storevals.length) {
        if (Array.isArray(storevals[i])) {
            storevals.splice(i, 1, ...storevals[i]);
        }
        i += 1;
    }

    // confirm if there final array doesn't have nested array
    let k = 0;
    while (k <= storevals.length) {
        if (Array.isArray(storevals[k])) {
            storevals.splice(k, 1, ...storevals[k]);
        }
        k += 1;
    }
    return storevals;
}

console.log(steamrollArray([1, {}, [3, [[4]]]]))
