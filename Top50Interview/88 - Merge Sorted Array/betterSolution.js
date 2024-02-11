/**
 * 61ms
 * 51.68mb
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let stopCheck = false
  for (var i = 0; i < m + n && !stopCheck; i++) {
    for (var j = 0; j < n && !stopCheck; j++) {
      if (nums1[i] > nums2[j] && !stopCheck || m === 0) {
        stopCheck = true
        nums2.forEach((num2) => {
          nums1.push(num2);
        });
      }
      else if(nums1[i] < nums2[j] && !stopCheck){
        stopCheck = true
        nums2.forEach((num2) => {
          nums1.push(num2);
        });
      }
    }
  }
  
  while(nums1.length !== m + n){
    let index = nums1.indexOf(0)
    nums1.splice(index, 1) 
  }

  nums1.sort(function (a, b) {
    return a - b;
  });

  console.log(nums1)
};

var nums1 = [1,0],
  m = 1,
  nums2 = [2],
  n = 1;
merge(nums1, m, nums2, n);
