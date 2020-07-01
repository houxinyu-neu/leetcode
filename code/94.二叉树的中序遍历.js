/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return []
  let res = []
  help(root, res)
  return res
}
function help(root, res) {
  if (root) {
    help(root.left, res)
    res.push(root.val)
    help(root.right, res)
  }
  return res
}
// @lc code=end
