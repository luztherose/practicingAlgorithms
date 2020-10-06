/*
    Missing letters

    Find the missing letter in the passed letter range and return it.
    If all letters are present in the range, return undefined.
*/
function fearNotLetter(str) {
    const alphaLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const theAlphabet = [...alphaLetters.toLowerCase()];
    //input
    const inputStr = [...str];
    // store the missing letter(s)
    let missingLetter;

    // determine the index where the search will begins
    const firstLetter = inputStr[0];
    //store index of the first letter in the input string
    let index; //this a global variable

    //Obtain the index of the first letter and assign it to the index variable
    for (let i = 0; i < theAlphabet.length; i++) {
        if (theAlphabet[i] === firstLetter) {
            index = i;
        }
    }
    // initialize i at the index caontained in the index variable
    outer: for (let i = index; i < theAlphabet.length; i++) {
        for (let k = 0; k < inputStr.length; k++) {

            if (inputStr[k] === theAlphabet[i]) {
                continue outer;
            }
        }
        missingLetter = theAlphabet[i];
        break;
    }
    if (missingLetter === "") {
        return undefined;
    }
    return missingLetter;
}
console.log(fearNotLetter("stvwx"))
