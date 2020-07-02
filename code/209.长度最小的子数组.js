/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let i = 0,
    j = 0,
    res = Infinity,
    sum = 0
  while (j < nums.length) {
    sum += nums[j]
    while (sum >= s) {
      res = Math.min(j - i + 1, res)
      sum -= nums[i]
      i++
    }
    j++
  }
  return res === Infinity ? 0 : res
}
// @lc code=end
