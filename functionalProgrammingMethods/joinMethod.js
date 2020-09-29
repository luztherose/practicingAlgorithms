/*
    Combine an Array into a String Using the join Method

    The join method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.
*/
// Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the replace method.

function sentensify(str) {
    // Only change code below this line
    let nonSymbole = str.split(/[-.,]/) // using regex to split the string where the characters in the character set apperears.

    return nonSymbole.join(" "); // using the join method to return the string separated by space
    // Only change code above this line
}
console.log(sentensify("There,has,been,an,awakening"))
