/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
  let res = 0
  function help(root, deep) {
    if (root !== null) {
      if (res < deep) {
        res = deep
      }
      if (root.left !== null) {
        help(root.left, deep + 1)
      }
      if (root.right !== null) {
        help(root.right, deep + 1)
      }
    }
  }
  help(root, 1)
  return res
}
// @lc code=end
