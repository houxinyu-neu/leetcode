/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let map = new Map()
  function copy(node) {
    if (!node) return null
    if (map.has(node)) return map.get(node)
    let res = new Node()
    map.set(node, res)
    res.val = node.val
    res.next = copy(node.next)
    res.random = copy(node.random)
    return res
  }
  return copy(head)
}
// @lc code=end
