/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let len = nums.length,
    ins = 0,
    res = nums[0]
  if (len === 1) return nums[0]
  for (let i = 0; i < len; i++) {
    if (ins >= 0) {
      ins += nums[i]
    } else {
      ins = nums[i]
    }
    res = Math.max(res, ins)
  }
  return res
}
// @lc code=end
