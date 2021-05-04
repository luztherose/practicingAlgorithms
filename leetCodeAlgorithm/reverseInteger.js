/*
  Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
*/

const reverse = function(x) {
  let inputReverse;
  let negativeInput;

  if(x === 0) {
    return 0;
  }else {
    if(x < 0) {
      inputReverse = x.toString().split("");
      let firstCharacter = inputReverse.shift();
      let reverseNegativeInput = inputReverse.reverse();
      firstCharacter += reverseNegativeInput.join("");
      negativeInput = Number(firstCharacter);
    }else {
      inputReverse = Number(x.toString().split("").reverse().join(""));
    }
  }

  if (negativeInput < Math.pow(-2, 31) || inputReverse > Math.pow(2, 31) - 1) {
    return 0;
  }else {
    return(x > 0 ? inputReverse: negativeInput );
  }
};

reverse(-123);