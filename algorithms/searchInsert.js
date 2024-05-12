var searchInsert = function (nums, target) {
  const n = nums.length;
  console.log('n' ,  n )

  let left = 0,
    right = n - 1,
    ans = n;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2); //  let mid = ((right - left) >> 1) + left;
   console.log('mid' ,  mid )
    if (target <= nums[mid]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  console.log('ans', ans);
  return ans;
};

const r = searchInsert('1245', 4)

console.log(r);