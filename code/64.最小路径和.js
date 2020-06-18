/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length,
    n = grid[0].length
  let res = Array.from(new Array(m), () => new Array(n))
  res[0][0] = grid[0][0]
  if (m + n === 2) return res[0][0]
  for (let i = 1; i < m; i++) {
    res[i][0] = grid[i][0] + res[i - 1][0]
  }
  for (let j = 1; j < n; j++) {
    res[0][j] = grid[0][j] + res[0][j - 1]
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      res[i][j] = Math.min(res[i - 1][j], res[i][j - 1]) + grid[i][j]
    }
  }
  return res[m - 1][n - 1]
}
// @lc code=end
