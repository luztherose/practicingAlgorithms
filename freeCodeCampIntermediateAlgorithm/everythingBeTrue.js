/*
    Everything Be True

    Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
    In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

    In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

    Remember, you can access object properties through either dot notation or [] notation.

*/

function truthCheck(collection, pre) {
    // falsy values
    const falsyValues = [false, 0, -0, NaN, "", null, undefined];

    return collection.every(item => {
        if ("" + item[pre] === "NaN") {
            return false
        }

        if (item[pre] === "" || item[pre] == false || item[pre] === 0 || item[pre] === -0 || item.pre || item[pre] === null || item[pre] === undefined || item[pre] === NaN) {
            return false;
        } else {
            return true;
        }
    });

}

console.log(truthCheck([{ "single": "double" }, { "single": NaN }], "single"))
