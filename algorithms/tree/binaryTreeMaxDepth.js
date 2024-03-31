// 二叉树最大深度
// https://leetcode.cn/problems/maximum-depth-of-binary-tree/solutions/349837/liang-chong-jie-fa-di-gui-dfs-bfs-by-hyj8/?envType=study-plan-v2&envId=top-interview-150

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const root = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};

const maxDepth = (root) => {
  if (root == null) return 0;
  const leftMaxDepth = maxDepth(root.left);
  const rightMaxDepth = maxDepth(root.right);
  return 1 + Math.max(leftMaxDepth, rightMaxDepth);
};

/* 广度优先 */
const maxDepth2 = (root) => {
  if (root == null) return 0;
  const queue = [root];
  let depth = 1;
  while (queue.length) {
      // 当前层的节点个数
      const levelSize = queue.length;          
      // 逐个让当前层的节点出列
      for (let i = 0; i < levelSize; i++) {    
          // 当前出列的节点
          const cur = queue.shift();            
          // 左右子节点入列
          if (cur.left) queue.push(cur.left);
          if (cur.right) queue.push(cur.right); 
      }
      // 当前层所有节点已经出列，如果队列不为空，说明有下一层节点，depth+1
      if (queue.length) depth++;
  }
  return depth;
};
