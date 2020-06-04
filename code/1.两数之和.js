/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map()
  var arr = []
  nums.forEach((item, idx) => {
    let temp = target - item
    if (map.has(temp)) {
      arr = [map.get(temp), idx]
    }
    map.set(item, idx)
  })
  return arr
  // for (let i = 0; i < nums.length; i++) {
  //   let temp = target - nums[i]
  //   if (map.has(temp)) {
  //     return [map.get(temp), i]
  //   }
  //   map.set(nums[i], i)
  // }
}
// @lc code=end
