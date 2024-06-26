/* 1、如何在tree中找到id=10102的对象？ */

const tree = [
  {
    id: "1",
    name: "教学素材管理",
    children: [
      {
        id: "101",
        name: "教学素材",
        children: [
          {
            id: "10101",
            name: "修改",
          },
          {
            id: "10102",
            name: "添加",
          },
        ],
      },
      {
        id: "102",
        name: "测试试题",
      },
      {
        id: "103",
        name: "问题任务",
      },
    ],
  },
  {
    id: "2",
    name: "基础数据管理",
    children: [
      {
        id: "201",
        name: "专业设置",
      },
      {
        id: "202",
        name: "专业管理",
      },
    ],
  },
];

//深度优先
{
  function deepQuery(tree, id) {
    function deepSearch(nodes) {
      for (const node of nodes) {
        if (node.id === id) {
          return node; // 找到节点后立即返回
        }
        if (node.children) {
          const foundNode = deepSearch(node.children);
          if (foundNode) {
            return foundNode; // 如果子节点中找到了节点，也立即返回
          }
        }
      }
      return null; // 未找到节点
    }
    
    return deepSearch(tree);
  }
}
//广度优先
{
  function breadthQuery(tree, id) {
    var stark = [];
    stark = stark.concat(tree);
    while (stark.length) {
      var temp = stark.shift();
      if (temp.children) {
        stark = stark.concat(temp.children);
      }
      if (temp.id === id) {
        return temp;
      }
    }
  }
  const r = breadthQuery(tree, "10102");
  console.log("breadthQuery", r);
}
