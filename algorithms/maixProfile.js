/* 买卖股票的最佳时机（最大利润）
给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

*/
/**暴力解法
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

  let result = 0


  let i = 0;


  for (let i = 0; i < prices.length; i++) {
      const buyPrice = prices[i]

      if(prices[i + 1] < buyPrice){
          continue
      }

      for (let j = i+1; j < prices.length; j++) {

          // 未来的一个数字是   

          const salsPrice = prices[j]
          // console.log(salsPrice, buyPrice, j, i)
          // j > i && salsPrice > buyPrice
          if (salsPrice > buyPrice) {
              const v = (salsPrice - buyPrice)
              result = Math.max(result, v)
          }
      }
  }


  return result
};

// 动态规划
const maxProfit2 = prices => {
  const len = prices.length;
  // 创建dp数组
  const dp = new Array(len).fill([0, 0]);
  // dp数组初始化
  dp[0] = [-prices[0], 0];
  for (let i = 1; i < len; i++) {
      // 更新dp[i]
      dp[i] = [
          Math.max(dp[i - 1][0], -prices[i]),
          Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]),
      ];
  }
  return dp[len - 1][1];
};

/* 作者：代码随想录
https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/solutions/847093/dai-ma-sui-xiang-lu-121-mai-mai-gu-piao-odhle/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */