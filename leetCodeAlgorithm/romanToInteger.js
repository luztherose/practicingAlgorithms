/*
  Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. 
  Symbol       Value
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000
*/

const symbols = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

const romanNumbersExceptions = {
  'IV': 4,
  'IX': 9,
  'XL': 40,
  'XC': 90,
  'CD': 400,
  'CM': 900
}

const romanToInt = function(s) {
  let outputInt = 0;
  if(s in romanNumbersExceptions) {
    outputInt = romanNumbersExceptions[s];
  } else {
    let arrStr = s.split("");
    let position;
    let nextPosition;
    let excepArray = [];
    outer:for (let i = 0; i < arrStr.length; i++) {
      position = arrStr[i];
      for (let k = i+1; k < arrStr.length+1; k++) {
        nextPosition = arrStr[k];
        if (position === "I" && nextPosition === "V" || position === "I" && nextPosition === "X" ||    position === "X" && nextPosition === "L" || position === "X" && nextPosition === "C" || 
        position === "C" && nextPosition === "D" || position === "C" && nextPosition === "M") {

            excepArray.push(position, nextPosition);
            let exceptStr = excepArray.join("");
            if(exceptStr in romanNumbersExceptions) {
            outputInt += romanNumbersExceptions[exceptStr];
            excepArray = [];
            arrStr.shift(position);
          }
          
        } else {
            if(position in symbols) {
              outputInt += symbols[position];
            }
        }
        continue outer;
        }
      }
  }
  return outputInt;
};

//console.log(romanToInt("XXXL"))
//console.log(romanToInt("XXIV"))
console.log(romanToInt("MCMXCIV"))