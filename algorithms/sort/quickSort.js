/* 
https://www.hello-algo.com/chapter_sorting/quick_sort/
 */

/* 元素交换 */
function swap(nums, i, j) {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

/* 哨兵划分 */
function partition(nums, left, right) {
  // 以 nums[left] 为基准数
  let i = left,
    j = right;
  while (i < j) {
    while (i < j && nums[j] >= nums[left]) {
      j -= 1; // 从右向左找首个小于基准数的元素
    }
    while (i < j && nums[i] <= nums[left]) {
      i += 1; // 从左向右找首个大于基准数的元素
    }
    // 元素交换
    this.swap(nums, i, j); // 交换这两个元素
  }
  this.swap(nums, i, left); // 将基准数交换至两子数组的分界线
  return i; // 返回基准数的索引
}

/* 快速排序 */
function quickSort(nums, left, right) {
  // 子数组长度为 1 时终止递归
  if (left >= right) return;
  // 哨兵划分
  const pivot = this.partition(nums, left, right);
  // 递归左子数组、右子数组
  this.quickSort(nums, left, pivot - 1);
  this.quickSort(nums, pivot + 1, right);
}


/* 
方式二
*/

{
  var quickSort = function (arr) {

    if (arr.length <= 1) { return arr; }

    var pivotIndex = Math.floor(arr.length / 2);

    var pivot = arr.splice(pivotIndex, 1)[0];

    var left = [];

    var right = [];

    for (var i = 0; i < arr.length; i++) {

      if (arr[i] < pivot) {

        left.push(arr[i]);

      } else {

        right.push(arr[i]);

      }

    }

    return quickSort(left).concat([pivot], quickSort(right));

  };
}