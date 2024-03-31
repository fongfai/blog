function canJump(nums) {
  let maxReach = 0; // 初始化最大可达位置为 0

  for (let i = 0; i < nums.length; i++) {
      console.log('i', i, 'maxReach', maxReach, i > maxReach)
      if (i > maxReach) return false; // 如果当前位置已经超过了最大可达位置，则无法到达终点

      maxReach = Math.max(maxReach, i + nums[i]); // 更新最大可达位置
  }

  return true; // 如果能够遍历完整个数组，则可以到达终点
}

// 示例测试
// console.log(canJump([2,3,1,1,4])); // 输出 true
console.log(canJump([3,2,1,0,4])); // 输出 false
