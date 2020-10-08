/*
    Sum All Primes

    A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

    Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/
function sumPrimes(num) {
    // function to check if the number presented is prime
    function isPrime(number) {
        for (let i = 2; i <= number; i++) {
            if (number % i === 0 && number != i) {
                // return true if it is divisible by any number that is not itself.
                return false;
            }
        }
        // if it passes the for loops conditions it is a prime
        return true;
    }
    // 1 is not a prime, so return nothing, also stops the recursive calls.
    if (num === 1) {
        return 0;
    }
    // Check if your number is not prime
    if (isPrime(num) === false) {
        // for non primes check the next number down from your maximum number, do not add anything to your answer
        return sumPrimes(num - 1);
    }

    // Check if your number is prime
    if (isPrime(num) === true) {
        // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
        return num + sumPrimes(num - 1);
    }
}
// test here
sumPrimes(10);

  //Code Explanation
