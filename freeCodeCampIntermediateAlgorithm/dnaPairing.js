/*
    DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/
function pairElement(str) {
    // pair up elements and store in an array
    // the pairs should be based pairs 
    // Base pairs are a pair of AT and CG
    const inputArr = [...str];
    const atPair = ["A", "T"];
    const taPair = ["T", "A"];
    const cgPair = ["C", "G"];
    const gcPair = ["G", "C"];
    const output = [];


    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === "A") {
            output.push(atPair);
        } else if (inputArr[i] === "T") {
            output.push(taPair);
        } else if (inputArr[i] === "C") {
            output.push(cgPair);
        } else if (inputArr[i] === "G") {
            output.push(gcPair);
        }

    }
    return output;
}

console.log(pairElement("ATCGA"))
