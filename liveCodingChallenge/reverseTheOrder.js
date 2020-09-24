// Reverse the order of a given array

// create a function that takes a parameter
// declare a literal array to hold the reversed array
// loop through the original array
// push the value of the original array in reversed order to the empty array
// return the reversed array

function reverseArrayOrder(arr) {
	const reversedArray = [];
for(let i = arr.length -1; i >= 0; i--) {
  //console.log(i);
	reversedArray.push(arr[i]);
}
return reversedArray;
}

reverseArrayOrder([1, 3, 4]);