/* Create a func that receives an array of strings as an argument, and return the most repeat it string thr the array.
*/ 
// create an empty obj
  // iterate over the array
  // populate the empty obj with the array values as keys, and set the its value to zero
  // count how many time the string appears in the array and assign the val to the correct key in the obj
  // find the bigges number value in the obj
  // return the key that corresponce to the value
  
const inputStrings = ["dog", "cat", "parrot", "dog", "dog", "cat"];
const animals = {};

const repeatString = (input) => {
  for (let i = 0; i < input.length; i++) {
    let key = input[i];

    if (key in animals) {
      animals[key] += 1;
    }else {
      animals[key] = 1;
    }
  }
  
  let animal = ""
  let count = 0
  for(key in animals){
        if(count <= animals[key]){
          animal= key;
          count = animals[key]
        }
        
  }

  
  console.log(animal);
}

repeatString(inputStrings);

