/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let preHead = new ListNode(0)
  preHead.next = head
  let fastNode = preHead,
    slowNode = preHead
  while (n > 0) {
    fastNode = fastNode.next
    n--
  }
  while (fastNode && fastNode.next) {
    fastNode = fastNode.next
    slowNode = slowNode.next
  }

  let next = slowNode.next
  slowNode.next = slowNode.next.next
  next.next = null
  return preHead.next
}
// @lc code=end
