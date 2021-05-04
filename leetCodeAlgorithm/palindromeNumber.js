/**
 * An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not
 */

const isPalindrome = function(x) {
  let inputArray = x.toString().split("");
  let reverseInputArray = x.toString().split("").reverse();;
  let countArray = [];
  if(x < 0) {
    return false;
  }else {
    outer:for(let i = 0; i < inputArray.length; i++) {
      for(let k = i; k < reverseInputArray.length; k++) {
        if(inputArray[i] === reverseInputArray[k]) {
            countArray.push(inputArray[i]);
      }
      continue outer;
    }
    
  }
  if (countArray.length === inputArray.length) {
      return true;
    } else {
      return false;
    }
  }
};
isPalindrome(120030221)
// isPalindrome(-121);
// isPalindrome(-101);
// isPalindrome(10);
//isPalindrome(121);
//isPalindrome(120030221); output:true, expected: false
