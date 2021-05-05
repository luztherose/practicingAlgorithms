/**
 * An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not
 */

const isPalindrome = function(x) {
  let inputArray = x.toString().split("");
  let reversedInputArray = [...inputArray].reverse();

  if (x < 0) {
      return false;
  } else {
      return inputArray.every((item, index) => item === reversedInputArray[index])
  }
};
isPalindrome(120030221)
// isPalindrome(-121);
// isPalindrome(-101);
// isPalindrome(10);
//isPalindrome(121);
//isPalindrome(120030221); output:true, expected: false
