/**给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。
输入：nums = [1,2,3,1], k = 3
输出：true
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    console.log("--", map, nums[i], Math.abs(i - map[nums[i]]), k);
    if (nums[i] in map && Math.abs(i - map[nums[i]]) <= k) {
      return true;
    }
    map[nums[i]] = i;
  }

  return false;
};
containsNearbyDuplicate([1,2,3,1], 3);
