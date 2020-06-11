/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let ins = 0,
    res = 0
  const len = prices.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      ins = Math.max(ins, prices[j] - prices[i])
    }
    res = Math.max(res, ins)
  }
  return res
}
// @lc code=end
