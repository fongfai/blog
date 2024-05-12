// 数组扁平化

var arr1 = [1, 2, [3], [1, 2, 3, [4, [2, 3, 4]]]];
function flatten(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
flatten(arr1); //[1, 2, 3, 1, 2, 3, 4, 2, 3, 4]


{

  function flattenV2(arr) {
    return arr.reduce(function (pre, cur) {
      return pre.concat(Array.isArray(cur) ? flattenV2(cur) : cur)
    }, [])
  }
  console.log('v2', flattenV2(arr1));//  [1, 2, 3, 4，5]

}
