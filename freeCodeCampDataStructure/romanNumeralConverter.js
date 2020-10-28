/*
    Roman Numeral Converter

    Convert the given number into a roman numeral.
    All roman numerals answers should be provided in upper-case.
*/
function convertToRoman(num) {
    // determine has many digits the number has.
    const singleDigit = {
        1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX"
    }
    const twoDigits = {
        1: "X", 2: "XX", 3: "XXX", 4: "XL", 5: "L", 6: "LX", 7: "LXX", 8: "LXXX", 9: "XC"
    }
    const threeDigits = {
        1: "C", 2: "CC", 3: "CCC", 4: "CD", 5: "D", 6: "DC", 7: "DCC", 8: "DCCC", 9: "CM"
    }
    const fourDigits = {
        letter: "M"
    }


    //global variables
    const composedRoman = [];
    let firstDigit;
    let secondDigit;
    let thirdDigit;
    let fourDigit;
    if (num >= 1 && num < 10) {
        return singleDigit[num]
    } else if (num >= 10 && num < 100) {
        const splitDigits = num.toString().split("");
        firstDigit = splitDigits[0];
        secondDigit = splitDigits[1];
        if (Number(firstDigit) !== 0 && Number(secondDigit) === 0) {
            return twoDigits[firstDigit];
        } else {
            if (Number(firstDigit) !== 0 && Number(secondDigit) > 0) {
                // const composedRoman = [];
                composedRoman.push(twoDigits[firstDigit], singleDigit[secondDigit]);
                return composedRoman.join("");
            }
        }
    } else if (num >= 100 && num < 1000) {
        const splitDigits = num.toString().split("");
        firstDigit = splitDigits[0];
        secondDigit = splitDigits[1];
        thirdDigit = splitDigits[2];
        if (Number(firstDigit) !== 0 && Number(secondDigit) === 0 && Number(thirdDigit) === 0) {
            composedRoman.push(threeDigits[firstDigit]);
            return composedRoman.join("");
        } else if (Number(firstDigit) !== 0 && Number(secondDigit) === 0 && Number(thirdDigit) !== 0) {
            composedRoman.push(threeDigits[firstDigit], singleDigit[thirdDigit]);
            return composedRoman.join("");
        } else if (Number(firstDigit) !== 0 && Number(secondDigit) !== 0 && Number(thirdDigit) !== 0) {
            composedRoman.push(threeDigits[firstDigit], twoDigits[secondDigit], singleDigit[thirdDigit]);
            return composedRoman.join("");
        }
    } else if (num >= 1000 && num < 10000) {
        const splitDigits = num.toString().split("");
        firstDigit = splitDigits[0];
        secondDigit = splitDigits[1];
        thirdDigit = splitDigits[2];
        fourDigit = splitDigits[3];
        if (Number(firstDigit) !== 0 && Number(secondDigit) === 0 && Number(thirdDigit) === 0 && Number(fourDigit) === 0) {
            for (let i = 0; i < firstDigit; i++) {
                composedRoman.push(fourDigits["letter"])
            }
            return composedRoman.join("");
        } else if (Number(firstDigit) !== 0 && Number(secondDigit) === 0 && Number(thirdDigit) === 0 && Number(fourDigit) !== 0) {
            for (let i = 0; i < firstDigit; i++) {
                composedRoman.push(fourDigits["letter"])
            }
            composedRoman.push(singleDigit[fourDigit])
            return composedRoman.join("");
        } else if (Number(firstDigit) !== 0 && Number(secondDigit) === 0 && Number(thirdDigit) !== 0 && Number(fourDigit) !== 0) {
            for (let i = 0; i < firstDigit; i++) {
                composedRoman.push(fourDigits["letter"])
            }
            composedRoman.push(twoDigits[thirdDigit], singleDigit[fourDigit])
            return composedRoman.join("");
        } else if (Number(firstDigit) !== 0 && Number(secondDigit) > 0 && Number(thirdDigit) !== 0 && Number(fourDigit) !== 0) {
            for (let i = 0; i < firstDigit; i++) {
                composedRoman.push(fourDigits["letter"])
            }
            composedRoman.push(threeDigits[secondDigit], twoDigits[thirdDigit], singleDigit[fourDigit])
            return composedRoman.join("");
        }
    }

}

console.log(convertToRoman(3999))
