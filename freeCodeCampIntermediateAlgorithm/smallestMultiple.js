/*
    Smallest Common Multiple
    Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
    The range will be an array of two numbers that will not necessarily be in numerical order.
    For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/
function smallestCommons(arr) {
    // determine the min and max number given
    // determine sequential numbers in the range between these parameters
    // find the smallest multiple
    // the smallest multiple must be evenly divisible by all numbers between min and the max number

    const maxNum = Math.max(...arr);
    const minNum = Math.min(...arr);
    const sequentialNumbers = [];

    for (let i = minNum; i <= maxNum; i++) {
        sequentialNumbers.push(i);
    }
    console.log(sequentialNumbers)
    let number = 1;

    while (true) {
        const isEven = sequentialNumbers.every(num => {
            // console.log(`${number} % ${num} = ${number % num}  `)
            return number % num === 0;
        });
        if (isEven) {
            return number;
        } else {
            number += 1;
        }
    }


    console.log(sequentialNumbers);

}
console.log(smallestCommons([1, 5]));
