/*
    Remove Elements from an Array Using slice Instead of splice

    A common pattern while working with arrays is when you want to remove items and keep the rest of the array. JavaScript offers the splice method for this, which takes arguments for the index of where to start removing items, then the number of items to remove. If the second argument is not provided, the default is to remove items through the end.

    Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.

    Do not mutate the original array provided to the function.
*/
// Using slice method
function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0, 3);
    // Only change code above this line
}
let inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities))


// Using splice method
// function nonMutatingSplice(cities) {
//     // Only change code below this line
//     return cities.splice(3);

//     // Only change code above this line
// }
//     let inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
//     nonMutatingSplice(inputCities);
