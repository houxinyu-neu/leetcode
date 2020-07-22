/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  function help(root) {
    if (root !== null) {
      ;[root.left, root.right] = [help(root.right), help(root.left)]
    }
    return root
  }
  return help(root)
}
// @lc code=end
