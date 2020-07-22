/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = []
  function help(root, deep) {
    if (root !== null) {
      if (!res[deep]) {
        res[deep] = []
      }
      res[deep].push(root.val)
      help(root.left, deep + 1)
      help(root.right, deep + 1)
    }
  }
  help(root, 0)
  return res
}
// @lc code=end
