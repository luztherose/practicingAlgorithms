/*

*/
function dropElements(arr, func) {
    const newArr = arr.filter(item => {
        if (func(item)) {
            return true;
        } else {
            arr.slice(item, 1)
        }
    })
    return newArr;
}

console.log(dropElements([1, 2, 3], function (n) { return n < 3; }))
