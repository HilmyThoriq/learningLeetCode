/**
 * 160ms
 * 58.64mb
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  var stopCheck = 0;
  var pushCheck = 0;

  if (m === 0) {
    for (var i = 0; i < m + n; i++) {
      nums1.splice(i, 0, nums2[i]);
      nums1.pop();
    }
  } else {
    for (var i = 0; i < m + n; i++) {
      for (var j = 0; j < n; j++) {
        if (nums1[i] > nums2[j] && stopCheck === 0) {
          // console.log(`${i}, ${j}`);
          stopCheck = i;
        }
      }
    }
  }

  nums2.forEach((num2) => {
    // console.log(`Stop ${stopCheck} Push ${pushCheck}`)
    nums1.splice(stopCheck + pushCheck, 0, num2);
    pushCheck++;
    nums1.pop();
    // console.log(nums1)
  });

  nums1.sort(function (a, b) {
    return a - b;
  });
  console.log(nums1);
};

var nums1 = [
    -10, -10, -9, -9, -9, -8, -8, -7, -7, -7, -6, -6, -6, -6, -6, -6, -6, -5,
    -5, -5, -4, -4, -4, -3, -3, -2, -2, -1, -1, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4,
    5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  m = 55,
  nums2 = [-10,-10,-9,-9,-9,-9,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9],
  n = 99;
merge(nums1, m, nums2, n);
