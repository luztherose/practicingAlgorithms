/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

// find the ending of the str
// save in a variable
// compare the value stored in the variable to the second argument, target
// if the values are equals return true, else false
function confirmEnding(str, target) {
    let lastOccuranceIndex = str.lastIndexOf(target);
    let newString = str.slice(lastOccuranceIndex);
    if(newString === target) {
        return true;
    }else {
        return false;
    }
}

confirmEnding("Bastian", "n");
