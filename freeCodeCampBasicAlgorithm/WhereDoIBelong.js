/*
Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/
function getIndexToIns(arr, num) {
    // sort the given array
    // once the array  has been sorted return the lowest index at which a value (second argument) should be inserted 
    // compare the second argument(num) to all the numbers in the array a find the lowest number
    // find the index of the smallest number
    // The returned value should be a number.
    arr.sort(function (a, b) { return a - b });
    let index = 0;
    for(let i = 0; i < arr.length; i++) {
        if(num > arr[i]) {
            index = index + 1;
        } 
    }
    return index;
}

//getIndexToIns([10, 20, 30, 40, 50], 35)
// getIndexToIns([40, 60], 50);
//getIndexToIns([10, 20, 30, 40, 50], 30)
//getIndexToIns([2, 20, 10], 19)