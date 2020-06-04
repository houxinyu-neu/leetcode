/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// [ -4, -1, -1, 0, 1, 2 ]
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b)
  let res = [],
    len = nums.length
  for (let i = 0; i < len; i++) {
    if (i && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1,
      right = len - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        res.push([nums[i], nums[left++], nums[right--]])
        while (nums[left] === nums[left - 1]) {
          left++
        }
        while (nums[right] === nums[right + 1]) {
          right--
        }
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return res
}
// @lc code=end
