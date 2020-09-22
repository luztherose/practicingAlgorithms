// implement a version of it that behaves exactly like the Array.prototype.map() with a for loop or Array.prototype.forEach().

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = (callback) => {
    var newArray = [];
    // Only change code below this line
    s.forEach(a => newArray.push(callback(a)));
    // Only change code above this line
    return newArray;
};


var new_s = s.myMap(function (item) {
    return item * 2;
});
