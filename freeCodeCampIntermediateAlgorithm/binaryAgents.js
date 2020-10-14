/*
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
*/


function binaryAgent(str) {
    // create a data base containing the binary alphabet
    const binaryAlphabet = [
        {
            binaryCode: "01000001",
            letter: "A"
        },
        {
            binaryCode: "01000010",
            letter: "B"
        },
        {
            binaryCode: "01000011",
            letter: "C"
        },
        {
            binaryCode: "01000100",
            letter: "D"
        },
        {
            binaryCode: "01000101",
            letter: "E"
        },
        {
            binaryCode: "01000110",
            letter: "F"
        },
        {
            binaryCode: "01000111",
            letter: "G"
        },
        {
            binaryCode: "01001000",
            letter: "H"
        },
        {
            binaryCode: "01001001",
            letter: "I"
        },
        {
            binaryCode: "01001010",
            letter: "J"
        },
        {
            binaryCode: "01001011",
            letter: "K"
        },
        {
            binaryCode: "01001100",
            letter: "L"
        },
        {
            binaryCode: "01001101",
            letter: "M"
        },
        {
            binaryCode: "01001110",
            letter: "N"
        },
        {
            binaryCode: "01001111",
            letter: "O"
        },
        {
            binaryCode: "01010000",
            letter: "P"
        },
        {
            binaryCode: "01010001",
            letter: "Q"
        },
        {
            binaryCode: "01010010",
            letter: "R"
        },
        {
            binaryCode: "01010011",
            letter: "S"
        },
        {
            binaryCode: "01010100",
            letter: "T"
        },
        {
            binaryCode: "01010101",
            letter: "U"
        },
        {
            binaryCode: "01010110",
            letter: "V"
        },
        {
            binaryCode: "01010111",
            letter: "W"
        },
        {
            binaryCode: "01011000",
            letter: "X"
        },
        {
            binaryCode: "01011001",
            letter: "Y"
        },
        {
            binaryCode: "01011010",
            letter: "Z"
        }

    ]
    // store the letters 
    const englishSentence = [];
    const inputStr = str.split(/\s/);
    // accessing the binary alphabet database

    console.log(englishSentence)
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
