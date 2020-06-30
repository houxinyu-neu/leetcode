/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }
  let res = new ListNode()
  if (l1.val < l2.val) {
    res.val = l1.val
    res.next = mergeTwoLists(l1.next, l2)
  } else {
    res.val = l2.val
    res.next = mergeTwoLists(l1, l2.next)
  }
  return res
}
// @lc code=end
