//给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

//滑动窗口 (https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/zi-jie-leetcode3wu-zhong-fu-zi-fu-de-zui-chang-zi-/
const lengthOfLongestSubstring = function (s) {
  let arr = [],//窗口
    max = 0,
    result = "";
  for (let i = 0; i < s.length; i++) {
    //如果当前字符串在数组里已经出现 那么此字符及其之前的全部删除
    if (arr.includes(s[i])) {
      arr.splice(0, index + 1);
    }
    arr.push(s.charAt(i));
    result = arr.slice().length > result.length ? arr.slice() : result;
    max = Math.max(arr.length, max);
  }
  return [max, result];
};
