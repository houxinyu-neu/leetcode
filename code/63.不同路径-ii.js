/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length,
    n = obstacleGrid[0].length
  let dp = Array.from(new Array(m), () => new Array(n).fill(0))
  dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0
  if (dp[0][0] === 0) return 0
  for (let i = 1; i < m; i++) {
    if (obstacleGrid[i][0] !== 1) {
      dp[i][0] = dp[i - 1][0]
    }
  }

  for (let j = 1; j < n; j++) {
    if (obstacleGrid[0][j] !== 1) {
      dp[0][j] = dp[0][j - 1]
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] !== 1) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[m - 1][n - 1]
}
// @lc code=end
