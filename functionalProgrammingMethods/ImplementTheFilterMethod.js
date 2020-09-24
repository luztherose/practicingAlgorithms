/*
    Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You may use a for loop or the Array.prototype.forEach() method.

*/
// Solution using a foor loop Method
// The global variable
let s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
    // Only change code below this line
    var newArray = [];
    for (let i = 0; i < s.length; i++) {
        if (callback(s[i])) {
            newArray.push(s[i])
        }
    }
    // Only change code above this line
    return newArray;

};
let new_s = s.myFilter(function (item) {
    return item % 2 === 1;
});
console.log(new_s);


/*
Solution using the forEach Method

    // The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  // Only change code below this line
let newArray = [];

s.forEach(num => {
    if(callback(num) === true) {
        newArray.push(num)
    }
})
  // Only change code above this line
return newArray;

};

var new_s = s.myFilter(function(item){
    return item % 2 === 1;
});
console.log(new_s);

*/