/**
    Define a function that takes an array of strings, and returns the most commonly occurring string in that array.
 */

// define a function
// look thr the array of string and look for the most common string
// count how many times the word appears
// return the most occurring string


let searchMostCommonString = (arr) => {
        const result = arr.reduce((obj, item) => {
            console.log(obj);
            console.log(item)
            if(!obj[item]) {
                obj[item] = 0;
            }
            obj[item]++;
            return obj;
    }, {});
    return result;
}

searchMostCommonString(["dog", "dog", "cat", "cat", "cat"])