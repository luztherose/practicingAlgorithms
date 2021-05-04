/* Create a function that receive two arguments, base and exponent, and return the pow result. 
### Output:
   *  2 ^ 4 = 16
   *  3 ^ 2 = 9
   *  4 ^ 3 = 64
 
 */
 

 const pow = (base, exp) => {
     let result = 1;
     for(let i = 0; i < exp; i++) {
        result *= base; // 4 *2 = 8
     }
     return result;

 }
 
console.log("1 ^ 0 = 1 = "+ pow(1, 0)); 
console.log("2 ^ 3 = 8 = "+ pow(2, 3));
console.log("2 ^ 4 = 16 = "+ pow(2, 4));
console.log("3 ^ 2  = 9 = "+ pow(3, 2));
console.log("4 ^ 3 = 64 = "+ pow(4, 3));
