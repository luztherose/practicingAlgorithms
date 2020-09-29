/*
    Split a String into an Array Using the split Method

    The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

    Since strings are immutable, the split method makes it easier to work with them.

    Example: 
    split by digits using a regular expression:
    var otherString = "How9are7you2today";
    var byDigits = otherString.split(/\d/);
    // Sets byDigits to ["How", "are", "you", "today"]
*/

// Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

function splitify(str) {
    // Only change code below this line
    // split by punctuation using regular expression
    let nonPunctuation = str.split(/[ ,.-]/);

    return nonPunctuation;
    // Only change code above this line

}
console.log(splitify("This.is.a-sentence"))
