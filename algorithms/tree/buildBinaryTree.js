/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/?envType=study-plan-v2&envId=top-interview-150
 *  从前序与中序遍历序列构造二叉树
 * 
 * 给定两个整数数组 preorder 和 inorder ，
 * 其中 preorder 是二叉树的先序遍历， 
 * inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
var buildTree = function (preorder, inorder) {
  // 前序遍历 [ 根节点, [左子树的前序遍历结果], [右子树的前序遍历结果] ]
  // 中序遍历 [ [左子树的中序遍历结果], 根节点, [右子树的中序遍历结果] ]
  [1, 2,5, 4]

  // 存储节点，为后面查找根节点做准备
  const rootNodeMap = new Map()
  for (let i = 0; i < inorder.length; i++) {
      rootNodeMap.set(inorder[i], i)
  }

  const n = preorder.length;

  function build(preorder, inorder, preorder_left, preorder_right, inorder_left, inorder_right) {

      if (preorder_left > preorder_right) return null;

      const rootIndex = rootNodeMap.get(preorder[preorder_left])

      const root = new TreeNode(preorder[preorder_left])

      root.left = build(preorder, inorder,
          preorder_left + 1,
          rootIndex - inorder_left + preorder_left,
          inorder_left,
          rootIndex - 1
      )

      root.right = build(preorder, inorder,
          rootIndex - inorder_left + preorder_left + 1,
          preorder_right,
          rootIndex + 1,
          inorder_right
      )

      return root

  }

  return build(preorder, inorder, 0, n - 1, 0, n - 1)

};


/* 从中序与后序遍历 构建二叉树 */
{

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  // 中序遍历 [ [左子树的中序遍历结果], 根节点, [右子树的中序遍历结果] ]
  // 后序遍历 [ [左子树的前序遍历结果], [右子树的前序遍历结果]， 根节点 ]

  // 存储节点，为后面查找根节点做准备
  const rootNodeMap = new Map()
  for (let i = 0; i < inorder.length; i++) {
      rootNodeMap.set(inorder[i], i)
  }

  const n = inorder.length;

  function build(inorder, postorder, inorder_left, inorder_right, postorder_left, postorder_right) {

      if (inorder_left > inorder_right || postorder_left > postorder_right ) return null;

      const rootIndex = rootNodeMap.get(postorder[postorder_right])

      let leftTreeLength  = rootIndex - inorder_left;

      const root = new TreeNode(postorder[postorder_right])

      root.left = build(inorder, postorder,
          inorder_left,
          rootIndex - 1,
          postorder_left,
          postorder_left + leftTreeLength - 1,
      )

      root.right = build(inorder, postorder,
        rootIndex + 1,
        inorder_right,
        postorder_left + leftTreeLength,
        postorder_right - 1
      )

      return root

  }
  return build(inorder, postorder, 0, n - 1, 0, n - 1)
};

}