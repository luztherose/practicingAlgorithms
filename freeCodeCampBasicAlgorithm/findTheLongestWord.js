/*
    Return the length of the longest word in the provided sentence.
    Your response should be a number.
*/
function findLongestWordLength(str) {
    // split out the array
    // create a new array to hold the length value of each position on the original array
    // destructure the new array
    // find the bigest number in the array and return it
    let newStringArray = str.split(" ");
    let numStringArray = [];
    console.log(newStringArray);
    for (let i = 0; i < newStringArray.length; i++) {
        numStringArray.push(newStringArray[i].length);
        //console.log(`position ${i} = ${newStringArray[i].length}`);
    }
    return Math.max(...numStringArray);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");