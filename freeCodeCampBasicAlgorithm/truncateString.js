/*
Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/
function truncateString(str, num) {
    // validate if the string (first argument) is longer than the second argument
    // if the string (first argument) is longer return a string with a ... ending 
    // store the number of characters specified in the 2nd argument
    // Add the ... to the end of the string
    // return that new string
    // if the string (first argument) is not longer than the 2nd argument  return first str

    if(str.length > num) {
        let endingString = "...";
        let truncatedString = str.slice(0, num);
        return truncatedString + endingString
    } else {
        if(num === str.length || num > str.length) {
            return str;
        }
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
