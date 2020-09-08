/*
Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
    // create an empty array to hold the repeated string
    // create an if else statement to validate the second argument
    // Repeat the first argument many times as the second argument indicates
    // return a new string with the repeated first argument
    // if the second argument is a negative number return an empty string
    let newRepeatedString = [];
    if (num > 0) {
        for(let i = 0; i < num; i++) {
            newRepeatedString.push(str);
        }
        return newRepeatedString.join("");
    } else {
        return "";
    }

}

repeatStringNumTimes("abc", 3);
