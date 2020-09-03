/*
Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
    // store the first argument 
    // Repeat the first argument many times as the second argument indicates
    // return a new string with the repeated first argument
    // if the second argument is a negative number return an empty string
    let repeatedString = str.length;
    repeatedString *= num;
    console.log(repeatedString)
    return str;
}

repeatStringNumTimes("abc", 3);
