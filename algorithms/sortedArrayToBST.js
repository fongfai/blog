https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/description/?envType=study-plan-v2&envId=top-interview-150
/* 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

高度平衡二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。
 */

/* https://pic.leetcode.cn/1671597261-MaZJuZ-image.png */
function sortedArrayToBST(nums) {
    return helper(nums, 0, nums.length - 1);
}

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function helper(nums, left, right) {
    if (left > right) {
        return null;
    }

    // 总是选择中间位置左边的数字作为根节点
    const mid = Math.floor((left + right) / 2);

    const root = new TreeNode(nums[mid]);
    root.left = helper(nums, left, mid - 1);
    root.right = helper(nums, mid + 1, right);
    return root;
}


const tree = sortedArrayToBST([-10,-3,0,5,9])

console.log(tree)

