/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// ! NOT SOLVE
var removeElement = function (nums, val) {
  let tmpPlus = 0;
  let correctedNums = nums.filter(num=>num !== val)

  return correctedNums;
};

let nums = [3,2,2,3];
let val = 3;

console.log(removeElement(nums, val));
