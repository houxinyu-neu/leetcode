# 复原IP地址

[leetcode93复原IP地址](https://leetcode-cn.com/problems/restore-ip-addresses/)

> 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
>
> 有效的 IP 地址正好由四个整数（每个整数位于 0 到 255 之间组成），整数之间用 '.' 分隔。
>
>  
>
> 示例:
>
> 输入: "25525511135"
> 输出: ["255.255.11.135", "255.255.111.35"]

**思路：**

+ 找到回溯结果条件
+ 循环各种情况进行验证回溯

```javascript
const restoreIpAddresses = function (s) {
  /**
   * 判断整数的正确性
   * @param {string} val
   * @return {boolean}
   */

  const isValid = (val) => {
    if (val < 0 || val > 255 || (val[0] == 0 && val.length > 1)) {
      return false
    }
    return true
  }
  /**
   * 回溯函数
   * @param {number} cnt
   * @param {string} currStr
   * @param {string} restStr
   * @return {void}
   */

  const helper = (cnt, currStr, restStr) => {
    if (cnt >= MAX_CNT) {
      // 如果刚好四个就存进去
      if (!restStr && cnt === MAX_CNT) {
        res.push(currStr)
      }
      return
    }
    for (let i = 1; i < MAX_CNT; i++) {
      const curr = restStr.slice(0, i)
      // 切分的整数格式不对或者切分的时候超过 restStr 的长度
      // 那么就结束递归吧，没有必要再走下去
      if (!isValid(curr) || i > restStr.length) {
        return
      }
      helper(cnt + 1, currStr ? `${currStr}.${curr}` : curr, restStr.slice(i))
    }
  }
  if (s.length < 4 || s.length > 12) {
    return []
  }
  const res = []
  const MAX_CNT = 4
  helper(0, '', s)
  return res
}
```

