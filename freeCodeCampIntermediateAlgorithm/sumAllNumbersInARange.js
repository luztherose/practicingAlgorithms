/*
    Sum All Numbers in a Range

    We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
*/
function sumAll(arr) {
    // determine the higthest and lowest num in the rage
    const minNum = Math.min(...arr);
    const maxNum = Math.max(...arr);
    // store all the numbers in the range in an array
    let rangeNumbersArr = [];
    // populate the rangeNumbersArr array
    for (let i = minNum; i <= maxNum; i++) {
        rangeNumbersArr.push(i);
    }
    // return the total value 
    return rangeNumbersArr.reduce((total, currentValue) => total + currentValue)

}

console.log(sumAll([1, 4]))
