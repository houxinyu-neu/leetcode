/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let map = new Map()
  let node = head
  while (node) {
    if (map.has(node)) return true
    map.set(node, true)
    node = node.next
  }
  return false
}
// @lc code=end
