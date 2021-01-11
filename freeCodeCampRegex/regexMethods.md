# Regular Expressions (Regex)
Note that the .match syntax is the **"opposite"** of the .test method you have been using thus far:

'string'.match(/regex/);
/regex/.test('string');

## Flags
1. i = ignore case (the case insensitive flag)
2. g = to search or extract a pattern more than once

**Note**
You can have multiple flags on your regex like /search/gi

##  Find More Than the First Match
***To search or extract a pattern more than once, you can use the g flag.***

Example:
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]

### Match Anything with Wildcard Period

The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. 
For example, if you wanted to match "hug", "huh", "hut", and "hum", you can use the regex /hu./ to match all four words.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let result = unRegex.test(exampleStr);

## Match Single Character with Multiple Possibilities

You learned how to match **literal patterns (/literal/)** and **wildcard character (/./)**. Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with ***character classes***. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match "bag", "big", and "bug" but not "bog". You can create the regex /b[aiu]g/ to do this. ***The [aiu] is the character class*** that will only match the characters "a", "i", or "u".

**Code Example:**
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result =quoteSample.match(vowelRegex); // Change this line

## Match Letters of the Alphabet
You can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.
***Inside a character set, you can define a range of characters to match using a hyphen character: -.***
For example, to match lowercase letters a through e you would use **[a-e]**.

**Code Example:**
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result = quoteSample.match(alphabetRegex); 

## Match Numbers and Letters of the Alphabet

Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.
Also, it is possible to combine a range of letters and numbers in a single character set.

**Code Example:**

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);

## Match Single Characters Not Specified

So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. ***These types of character sets are called negated character sets.***

**To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.**

For example, /[^aeiou]/gi **matches all characters that are not a vowel.** Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.

**Code Example:**
Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex

let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

## Match Characters that Occur One or More Times


Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

You can use the + character to check if that is the case. Remember, **the character or pattern has to be present consecutively.** That is, the character has to repeat one after the other.

For example, /a+/g would find one match in "abc" and return ["a"]. Because of the +, it would also find a single match in "aabc" and return ["aa"].

If it were instead checking the string "abab", it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no "a" in the string "bcd", it wouldn't find a match.

**Code Example:**

You want to find matches when the letter s occurs one or more times in "Mississippi". Write a regex that uses the + sign.

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);