/* 最长公共子序列
输入：text1 = "abcde", text2 = "ace" 
输出：3  
解释：最长公共子序列是 "ace" ，它的长度为 3 。
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length,
    n = text2.length;
  const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if(text1[i] === text2[j]){
        dp[i][j] = dp[i-1][j-1] + 1
      }else{
        dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
      }
    }
  }
  return dp[m][n]
 
};

const r = longestCommonSubsequence("abcde", "ace" )
console.log('r', r)
/* 
作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/longest-common-subsequence/solution/zui-chang-gong-gong-zi-xu-lie-by-leetcod-y7u0/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */
