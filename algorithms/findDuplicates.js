/* """ 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。

找到所有出现两次的元素。

你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？

示例：

输入:
[4,3,2,7,8,2,3,1]

输出:
[2,3]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-all-duplicates-in-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处 """
 */
var findDuplicates = function(nums) {
    const n = nums.length;
    const ans = [];
    // # 1<=num<=n 遍历到 num 则令第 num 个元素变成-num
    for (let i = 0; i < n; ++i) {
        const x = Math.abs(nums[i]);
        if (nums[x - 1] > 0) {
            nums[x - 1] = -nums[x - 1];
        } else {
        // # 如果第num个数字已经是负的 说明之前遇到过num 说明num出现两次
            ans.push(x);
        }
    }
    return ans;
}

/* # def findDuplicates(nums):
#     if not nums: return []
#     res=[]
#     n = len(nums)
#     for i in range(n):
#         num=abs(nums[i])
#         if nums[num-1]<0:
#             res.append(num)
#         else:
#             nums[num-1]=-nums[num-1]
#     return res

# print(findDuplicates([4,3,2,7,8,2,3,1]))

 */