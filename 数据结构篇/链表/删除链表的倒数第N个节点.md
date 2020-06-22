# 删除链表的倒数第N个节点

[leetcode19](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

> 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
>
> 示例：
>
> 给定一个链表: 1->2->3->4->5, 和 n = 2.
>
> 当删除了倒数第二个节点后，链表变为 1->2->3->5.
> 说明：
>
> 给定的 n 保证是有效的。
>
> 进阶：
>
> 你能尝试使用一趟扫描实现吗？

**思路：快慢指针找到删除节点，执行链表删除操作，要注意提前声明空余节点一遍能到达最后一个节点**

```javascript
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
```

