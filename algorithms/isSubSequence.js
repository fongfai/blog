// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

// 输入：s = "abc", t = "ahbgdc"
// 输出：true
var isSubsequence = function (s, t) {
  let sPoint = 0;

  for (let i = 0; i < t.length; i++) {
    const element = t[i];
    if (element === s[sPoint]) {
      sPoint++;
    }
  }
  if(sPoint === s.length) {
    return true
  }
  return false
};
