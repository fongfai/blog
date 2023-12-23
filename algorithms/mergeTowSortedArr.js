// 合并两个有序数组 https://leetcode.cn/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150


/* 
示例 1：

输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
 */
/** 先合并再排序
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m)
  console.log('num1-1', nums1)
  nums1 = nums1.concat(nums2).sort(function (a, b) { return a - b})
  console.log('num1-2', nums1)
}
// 双指针 从前往后遍历 比较哦大小
var merge = function(nums1, m, nums2, n) {
  let p1 = 0, p2 = 0;
  const sorted = Array(m + n).fill(0);
  var cur;
  while (p1 < m || p2 < n) {
      if (p1 === m) {
          cur = nums2[p2++];
      } else if (p2 === n) {
          cur = nums1[p1++];
      } else if (nums1[p1] < nums2[p2]) {
          cur = nums1[p1++];
      } else {
          cur = nums2[p2++];
      }
      sorted[p1 + p2 - 1] = cur;
  }
  for (let i = 0; i != m + n; ++i) {
      nums1[i] = sorted[i];
  }
};

/* var merge2 = function (nums1, m, nums2, n) {
  const copyNum1 = [...nums1]

  let p1 = 0;
  let p2 = 0;
  let count = 0;
  while (count < nums1.length){
    const n1 = copyNum1[p1];
    const n2 = nums2[p2];
    console.log('n1', n1,  'n2', n2, 'count', count)
    console.log('p1', p1, 'p2', p2)
    if(n1 <= n2 && count <= m){
      nums1[count] = n1
      p1++
    }else{
      nums1[count] = n2
      p2++
    }
    count++
  }
  console.log(nums1)
} */

merge2([1,2,3,0,0,0], 3, [2, 5, 6], 3)


