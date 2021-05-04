
/**
 * 1. Two Sum
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  // iterate over the array
  // finds the numbers that sum up to the target
  // return indices of the two numbers such that they add up to target.
  
  const indicesSArray = [];
  
for (let i = 0; i < nums.length; i++ ) {
  for(let k = i+1; k < nums.length; k++ ) {
    if(nums[i] + nums[k] === target){
			if(indicesSArray.length < 2) { 
				indicesSArray.push(i, k);
			}
			
		}
    
  }
  }
    return indicesSArray;
};

//twoSum([-1,-2,-3,-4,-5], -8);
//twoSum([2,7,11,15], 9);
//twoSum([3,2,3], 6)
//twoSum([2,5,5,11], 10)








