let input = [
  {
    id: 2,
    val: "班级1",
    parentId: 1,
  },
  {
    id: 1,
    val: "学校",
    parentId: null,
  },
 
  {
    id: 3,
    val: "班级2",
    parentId: 1,
  },
  {
    id: 4,
    val: "学生1",
    parentId: 2,
  },
  {
    id: 5,
    val: "学生2",
    parentId: 3,
  },
  {
    id: 6,
    val: "学生3",
    parentId: 3,
  },
];

// function arr2tree(arr) {
//   // record arr elemet
//   const map = {};

//   let tree = [];

//   for (var i = 0; i < arr.length; i++) {
//     map[arr[i].id] = i;
//     arr[i].children = [];
//   }

//   for (var i = 0; i < arr.length; i++) {
//     const ele = arr[i];
//     const { id, parentId } = ele;
//     // root node
//     const parentIndex = map[parentId];
//     if (parentId) {
//       console.log(" map[parentIndex]", map[parentIndex]);
//       arr[parentIndex].children.push(ele);
//     } else {
//       tree.push(ele);
//     }
//   }
//   console.log(JSON.stringify(tree));
//   return tree;
// }

// arr2tree(input)
// arr2tree(
//   [
//   {
//     id: "12",
//     parentId: "0",
//     text: "Man",
//     level: "1",
//     children: null,
//   },
//   {
//     id: "6",
//     parentId: "12",
//     text: "Boy",
//     level: "2",
//     children: null,
//   },
//   {
//     id: "7",
//     parentId: "12",
//     text: "Other",
//     level: "2",
//     children: null,
//   },
//   {
//     id: "9",
//     parentId: "0",
//     text: "Woman",
//     level: "1",
//     children: null,
//   },
//   {
//     id: "11",
//     parentId: "9",
//     text: "Girl",
//     level: "2",
//     children: null,
//   },
// ]);

/**
 * 数组转树形结构
 * @param {array} arr 被转换的数组
 * @param {number|string} root 根节点（最外层节点）
 * @returns array
 */
function arrayToTreeV2(arr, root) {
  const result = [] // 用于存放结果
  const map = {} // 用于存放 list 下的节点

  // 遍历 list
  for (const item of arr) {
    // 1. 获取节点的 id 和 父 id
    const { id, parentId } = item // ES6 解构赋值

    // 2. 将节点存入 map
    if (!map[id]) map[id] = {}

    // 3. 根据 id，将节点与之前存入的子节点合并
    map[id] = map[id].children ? { ...item, children: map[id].children } : { ...item }

    // 4. 如果是根节点，存入 result
    if (!parentId) {
      result.push(map[id])
    } else {
      // 5. 反之，存入父节点
      if (!map[parentId]) map[parentId] = {}
      if (!map[parentId].children) map[parentId].children = []
      map[parentId].children.push(map[id])
    }
  }

  // 将结果返回
  console.log(JSON.stringify(result));
  return result
}


arrayToTreeV2(input)