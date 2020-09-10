/*
    Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

    For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
    // capitalize the first letter of each word
    // capitalize connecting words after each space
    // return the provided string with the first letter of each word capitalized
    
    let inputString = [...str.toLowerCase().split(" ")];
    let capitalizedString = [];
    for(let i = 0; i < inputString.length; i++) {
        let firstLetter = inputString[i].charAt(0)
        let capitalizedLetter = firstLetter.toUpperCase();
        capitalizedString.push(inputString[i].replace(firstLetter, capitalizedLetter ))
    }
    return capitalizedString.join(" ");
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
