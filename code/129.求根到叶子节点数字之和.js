/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  if (root === null) return 0
  let sum = 0
  function help(root, current) {
    current = current * 10 + root.val
    if (root.left === null && root.right === null) sum += current
    if (root.left !== null) help(root.left, current)
    if (root.right !== null) help(root.right, current)
  }
  help(root, 0)
  return sum
}
// @lc code=end
