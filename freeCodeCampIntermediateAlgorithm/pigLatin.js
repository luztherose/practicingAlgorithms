/*
    Pig Latin

    Pig Latin is a way of altering English Words. The rules are as follows:
    - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
    - If a word begins with a vowel, just add "way" at the end.
*/
function translatePigLatin(str) {
    const pigLatin = [];
    const vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < str.length; i++) {
        for (let k = 0; k < vowels.length; k++) {
            if (str[i] !== vowels[k]) {
            } else if (str[0] === vowels[k] && str[1] !== vowels[k]) {
                pigLatin.push(str + "way");
                return pigLatin.join("");
            } else if (str[0] !== vowels[k] && str[1] === vowels[k]) {
                pigLatin.push(str.slice(1));
                pigLatin.shift();
                pigLatin.push(str.slice(0, 1) + "ay")
                return pigLatin.join("");

            } else if (str[0] !== vowels[k] && str[1] !== vowels[k] && str[2] === vowels[k]) {
                pigLatin.push(str.slice(2));
                pigLatin.shift();
                pigLatin.shift();
                pigLatin.push(str.slice(0, 1));
                pigLatin.push(str.slice(1, 2) + "ay");
                return pigLatin.join("");
            } else {
                if (str[4] === vowels[k]) {
                    const switchPigLatin = str.slice(4);
                    pigLatin.unshift(...switchPigLatin);
                    pigLatin.push("ay");
                    return pigLatin.join("");
                }
            }
        }
        pigLatin.push(str[i]);
    }
    pigLatin.push("ay")
    return pigLatin.join("")

}


console.log(translatePigLatin("schwartz"))
