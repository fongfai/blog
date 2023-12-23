/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
  
//   // 双指针， 把==val的移到后面
//   let start = 0;
//   let end = nums.length - 1;

//   let temp;
//   let count = 0;
//   while(start <= end) {
//     if(nums[start] === val){
//       temp = nums[end]
//       nums[end] = val;
//       nums[start] = temp;
//       start ++;
//       end --;
//       count++;
//     }
//   }
//   return nums.length - count
// };
var removeElement = function(nums, val) {
  const n = nums.length;
  let left = 0;
  for (let right = 0; right < n; right++) {
      if (nums[right] !== val) {
          nums[left] = nums[right];
          left++;
      }
  }
  return left;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  
  const n = nums.length;
  let left = 0;
  const map = {}
  for (let right = 0; right < n; right++) {
      if (!map[nums[right]]) {
          nums[left] = nums[right];
          left++;
      }
      map[nums[right]] = nums[right];
  }
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

  let map = {}

  let left = 0

  for (let i = 0; i < nums.length; i++){
    if(!map[nums[i]] || map[nums[i]] < 2){
      nums[left] = nums[i]
      left++
    }
    
    if(!map[nums[i]]){
      map[nums[i]] = 0;
    }else{
      map[nums[i]]++
    }

  }

};