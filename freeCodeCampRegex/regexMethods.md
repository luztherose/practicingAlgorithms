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

## Match Characters that Occur Zero or More Times

The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

The character to do this is the **asterisk or star: *.**

Example:
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

## Find Characters with Lazy Matching

In regular expressions, a ***greedy match*** finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a ***lazy match***, which finds the smallest possible part of the string that satisfies the regex pattern.

You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.

However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

**Code Example:**
Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.

let text = "<h1>Winter is coming</h1>";
let myRegex = /<[a-z0-9]*?>/; // Change this line
let result = text.match(myRegex);

### Find One or More Criminals in a Hunt
The regex /z+/ matches the letter z when it appears one or more times in a row. It would find matches in all of the following strings:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"

**Code Example:**

Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.

let reCriminals = /C+/; // Change this line

## Match Beginning String Patterns

n an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false

**Code Example:**

Use the caret character in a regex to find "Cal" only in the beginning of the string rickyAndCal.

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

## Match Ending String Patterns

You learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.

You can search the end of strings using the dollar sign character $ at the end of the regex.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// Returns false

**Code Example:**

Use the anchor character ($) to match the string "caboose" at the end of the string caboose.

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

## Match All Letters and Numbers

Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.

The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true

These shortcut character classes are also known as shorthand character classes.

**Code Example:**

Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

## Match Everything But Letters and Numbers

You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. A natural pattern you might want to search for is the opposite of alphanumerics.

You can **search for the opposite of the \w with \W.** Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]

**Code Example:**

Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

## Match All Numbers

You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers.

The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

**Code Example:**

Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

## Match All Non-Numbers

The last challenge showed how to search for digits using the shortcut \d with a lowercase d. You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.

**Code Example:**
Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

##  Restrict Possible Usernames

Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

    Usernames can only use alpha-numeric characters.

    The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

    Username letters can be lowercase and uppercase.

    Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

**Code Example:**
Change the regex userCheck to fit the constraints listed above.

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);

Code Explanation

    ^ - start of input
    [a-z] - first character is a letter
    [a-z]+ - following characters are letters
    \d*$ - input ends with 0 or more digits
    | - or
    ^[a-z] - first character is a letter
    \d\d+ - following characters are 2 or more digits
    $ - end of input
