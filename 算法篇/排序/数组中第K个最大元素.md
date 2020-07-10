# 数组中第K个最大元素

[leetcode215](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/description/)

> 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
>
> 示例 1:
>
> 输入: [3,2,1,5,6,4] 和 k = 2
> 输出: 5
> 示例 2:
>
> 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
> 输出: 4
> 说明:
>
> 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

**思路：直接排序**

```javascript
var findKthLargest = function (nums, k) {
  nums = nums.sort((a, b) => a - b).reverse()
  return nums[k - 1]
}
```

**思路：快速排序的思路+分治法。**

```javascript
let findKthLargest = function(nums, k) {
    return quickSelect(nums, nums.length - k)
};

let quickSelect = (arr, k) => {
  return quick(arr, 0 , arr.length - 1, k)
}

let quick = (arr, left, right, k) => {
  let index
  if(left < right) {
    // 划分数组
    index = partition(arr, left, right)
    // Top k
    if(k === index) {
        return arr[index]
    } else if(k < index) {
        // Top k 在左边
        return quick(arr, left, index-1, k)
    } else {
        // Top k 在右边
        return quick(arr, index+1, right, k)
    }
  }
  return arr[left]
}

let partition = (arr, left, right) => {
  // 取中间项为基准
  var datum = arr[Math.floor(Math.random() * (right - left + 1)) + left],
      i = left,
      j = right
  // 开始调整
  while(i < j) {
    
    // 左指针右移
    while(arr[i] < datum) {
      i++
    }
    
    // 右指针左移
    while(arr[j] > datum) {
      j--
    }
    
    // 交换
    if(i < j) swap(arr, i, j)

    // 当数组中存在重复数据时，即都为datum，但位置不同
    // 继续递增i，防止死循环
    if(arr[i] === arr[j] && i !== j) {
        i++
    }
  }
  return i
}

// 交换
let swap = (arr, i , j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
```

**思路：快速排序改良的中位数算法`BFPRT`+归并思想。**

```javascript
let findKthLargest = function(nums, k) {
    return nums[bfprt(nums, 0, nums.length - 1, nums.length - k)]
}

let bfprt = (arr, left , right, k) => {
  let index
  if(left < right) {
    // 划分数组
    index = partition(arr, left, right)
    // Top k
    if(k === index) {
        return index
    } else if(k < index) {
        // Top k 在左边
        return bfprt(arr, left, index-1, k)
    } else {
        // Top k 在右边
        return bfprt(arr, index+1, right, k)
    }
  }
  return left
}

let partition = (arr, left, right) => {
  // 基准
  var datum = arr[findMid(arr, left, right)],
      i = left,
      j = right
  // 开始调整
  while(i < j) {
    // 左指针右移
    while(arr[i] < datum) {
      i++
    }
    
    // 右指针左移
    while(arr[j] > datum) {
      j--
    }
    
    // 交换
    if(i < j) swap(arr, i, j)

    // 当数组中存在重复数据时，即都为datum，但位置不同
    // 继续递增i，防止死循环
    if(arr[i] === arr[j] && i !== j) {
        i++
    }
  }
  return i
}

/**
 * 数组 arr[left, right] 每五个元素作为一组，并计算每组的中位数，
 * 最后返回这些中位数的中位数下标（即主元下标）。
 *
 * @attention 末尾返回语句最后一个参数多加一个 1 的作用其实就是向上取整的意思，
 * 这样可以始终保持 k 大于 0。
 */
let findMid = (arr, left, right) => {
    if (right - left < 5)
        return insertSort(arr, left, right);

    let n = left - 1;

    // 每五个作为一组，求出中位数，并把这些中位数全部依次移动到数组左边
    for (let i = left; i + 4 <= right; i += 5)
    {
        let index = insertSort(arr, i, i + 4);
        swap(arr[++n], arr[index]);
    }

    // 利用 bfprt 得到这些中位数的中位数下标（即主元下标）
    return findMid(arr, left, n);
}

/**
 * 对数组 arr[left, right] 进行插入排序，并返回 [left, right]
 * 的中位数。
 */
let insertSort = (arr, left, right) => {
    let temp, j
    for (let i = left + 1; i <= right; i++) {
        temp = arr[i];
        j = i - 1;
        while (j >= left && arr[j] > temp)
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return ((right - left) >> 1) + left;
}

// 交换
let swap = (arr, i , j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

```

