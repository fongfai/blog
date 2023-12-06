

const listTree = [
  {
    "id": 1,
    "val": "学校",
    "parentId": null,
    "children": [
      {
        "id": 2,
        "val": "班级1",
        "parentId": 1,
        "children": [{ "id": 4, "val": "学生1", "parentId": 2 }]
      },
      {
        "id": 3,
        "val": "班级2",
        "parentId": 1,
        "children": [
          { "id": 5, "val": "学生2", "parentId": 3 },
          { "id": 6, "val": "学生3", "parentId": 3 }
        ]
      }
    ]
  }
]

function treeToList(tree) {
  // 设置临时数组，用来存放队列
  let queen = [];
  // 设置输出数组，用来存放要输出的一维数组
  const result = [];
  queen = queen.concat(tree);
  // 对树对象进行广度优先的遍历
  while(queen.length) {
    const first = queen.shift();
    if (first.children) {
      queen = queen.concat(first.children);
      delete first.children
    }
    result.push(first);
  }
  console.log(result);
  return result;
} 
treeToList(listTree, 'children')