

// 作者：Romantic Ardinghellix4s
// 链接：https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

//滑动窗口 (https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/zi-jie-leetcode3wu-zhong-fu-zi-fu-de-zui-chang-zi-/
var lengthOfLongestSubstring = function (s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set();
  const n = s.length;
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1, ans = 0;
  for (let i = 0; i < n; ++i) {
    if (i != 0) {
      // 左指针向右移动一格，移除一个字符
      console.log('occ', Array.from(occ))
      const r = occ.delete(s.charAt(i - 1));
      console.log('i', i, s.charAt(i - 1), Array.from(occ))
    }
    console.log('while-', rk + 1, Array.from(occ), s.charAt(rk + 1))
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      // 不断地移动右指针
      occ.add(s.charAt(rk + 1));
      ++rk;
    }
    // 第 i 到 rk 个字符是一个极长的无重复字符子串
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};

// 时间复杂度为O(n)


//给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 用left和right两个指针, right指针前移的时候, 去检测max值, left指针前移的时候，直接进去下一个循环
// https://leetcode.cn/problems/longest-substring-without-repeating-characters/solutions/1538157/jsjie-ti-si-lu-qing-xi-ming-liao-by-inte-c9re/
var lengthOfLongestSubstring = function (str) {
  if (str.length <= 1) {
    return str.length;
  }
  let left = 0;
  let right = 1;
  let max = 0;
  let temp;
  while (right < str.length) {
    temp = str.slice(left, right);
    if (temp.indexOf(str.charAt(right)) > -1) {
      left++;
      continue;
    } else {
      right++;
    }
    if (right - left > max) {
      max = right - left;
    }
  }
  return max;
};
// 时间复杂度为O(n^2)



/* 方法三： */
var lengthOfLongestSubstring3 = function (s) {
  let map = new Map(),
    max = 0;
  let i = 0;
  for (let j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      // 遇到重复的字符 左指针i+1
      console.log("--", "j:", j, "s[j]:", s[j], "i:", i, map.get(s[j]) + 1, i);
      /* 如果 map 中已经存在字符 s[j]，说明发现了重复字符。
      这里会更新 i 的值为当前重复字符上次出现位置的下一个索引和 i 本身中的最大值，
      以确保 i 始终指向当前无重复字符子串的起始位置。 
      */
      i = Math.max(map.get(s[j]) + 1, i);
    }
    max = Math.max(max, j - i + 1);
    map.set(s[j], j);
  }
  return max;
};
