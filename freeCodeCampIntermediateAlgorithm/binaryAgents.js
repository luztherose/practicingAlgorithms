/*
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
*/


function binaryAgent(str) {
    const inputStr = str.split(/\s/); // an array of the binary input

    // create a data base containing the binary alphabet

    const binaryAlphabet = {
        "01000001": "A", "01000010": "B", "01000011": "C", "01000100": "D", "01000101": "E", "01000110": "F",
        "01000111": "G", "01001000": "H", "01001001": "I",
        "01001010": "J", "01001011": "K", "01001100": "L",
        "01001101": "M", "01001110": "N", "01001111": "O", "01010000": "P", "01010001": "Q", "01010010": "R", "01010011": "S", "01010100": "T", "01010101": "U",
        "01010110": "V", "01010111": "W", "01011000": "X",
        "01011001": "Y", "01011010": "Z", "00100111": "'", "00100000": " ", "00100001": "!", "00111111": "?",

        "01100001": "a", "01100010": "b", "01100011": "c", "01100100": "d", "01100101": "e", "01100110": "f",
        "01100111": "g", "01101000": "h", "01101001": "i",
        "01101010": "j", "01101011": "k", "01101100": "l",
        "01101101": "m", "01101110": "n", "01101111": "o", "01110000": "p", "01110001": "q", "01110010": "r", "01110011": "s", "01110100": "t", "01110101": "u",
        "01110110": "v", "01110111": "w", "01111000": "x",
        "01111001": "y", "01111010": "z"
    };
    const letter = [];
    for (let i = 0; i < inputStr.length; i++) {
        let binaryCode = inputStr[i];
        letter.push(binaryAlphabet[binaryCode])
    }

    return letter.join("");
}


console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))
