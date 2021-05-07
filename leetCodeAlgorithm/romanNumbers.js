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

function romanToInt(string){
  let copiedString = string
  
  let sumCharacter = (map) =>{
    let sum = 0
    for (const [key, value] of Object.entries(map)) {
      var reg = new RegExp(key, 'g');
      let times = ( copiedString.match(reg) || []).length    
      if(times > 0){
        sum += times * value
        copiedString = copiedString.replace(key,"") // in the browser should be replace.All()
      }
    }
    return sum;
  }

  return sumCharacter(romanNumbersExceptions) + sumCharacter(symbols);
}


//console.log(romanToInt("XXXL"))
//console.log(romanToInt("XXIV"))
console.log(romanToInt("MCMXCIV"))