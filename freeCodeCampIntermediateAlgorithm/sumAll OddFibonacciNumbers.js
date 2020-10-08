/*
    Sum All Odd Fibonacci Numbers
    Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

    The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

    For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/
function sumFibs(num) {
    // store all the Sequence of Fibonacci Numbers  between 1 <= num
    // filter the the odd Fibonacci Numbers
    // odd numbers when devided by 2 the resuduos != 0
    // return the sum of all fizz numbers

    const fizzSequencNumbers = [1, 1,];
    for (let i = 0; i <= num; i++) {
        // console.log(num)
        if ((fizzSequencNumbers[i] + fizzSequencNumbers[i + 1]) > num) {
            break;
        }
        fizzSequencNumbers.push(fizzSequencNumbers[i] + fizzSequencNumbers[i + 1]);

    }
    console.log(fizzSequencNumbers)
    const oddFibonacciNumbers = fizzSequencNumbers.filter(num => {
        if (num % 2 !== 0) {
            return num;
        }
    });
    const sumOfFizzNumbers = oddFibonacciNumbers.reduce((sum, currentVal) => sum = sum + currentVal);

    return sumOfFizzNumbers
    // return num;
}

console.log(sumFibs(4))
