/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (!Array.isArray(height)) return
  let i = 0,
    ins = 0,
    res = 0
  j = height.length - 1
  while (i < j) {
    ins = calculateArea(i, j, height)
    if (height[i] < height[j]) i++
    else j--
    res = Math.max(res, ins)
  }
  return res
}
function calculateArea(i, j, height) {
  return Math.min(height[i], height[j]) * (j - i)
}
// @lc code=end
