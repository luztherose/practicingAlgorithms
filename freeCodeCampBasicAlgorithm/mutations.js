/*
    Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
    let composedString = [];
    let firstString = [];
    let secString = [];
    firstString.push(...arr[0].toLowerCase());
    secString.push(...arr[1].toLowerCase());
    // loop thr the first string 
    // look for the characters of the sec string on the first string

    outer:
    for(let i = 0; i < secString.length; i++ ) {
        for(let k = 0; k < firstString.length; k++ ) {
            // console.log(`secString[${i}] ${secString[i]} firstString[${k}] ${firstString[k]}`)
            if(secString[i] == firstString[k]) {
                //console.log(`composedString.push`)
                composedString.push(secString[i]);

                continue outer;
            }
        }
    }
    console.log(composedString)
    if(composedString.length == secString.length) {
        return true;
    } else {
        return false;
    }
    
}

//mutation(["hello", "hey"]);
mutation(["hello", "Hello"])
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])
// mutation(["Mary", "Army"])