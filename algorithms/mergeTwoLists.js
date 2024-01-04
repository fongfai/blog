/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**合并两个有序链表 
 * https://leetcode.cn/problems/merge-two-sorted-lists/description/?envType=study-plan-v2&envId=top-interview-150
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head11 = new ListNode(1, head12)
const head12 = new ListNode(2, head13)
const head13 = new ListNode(4, )


const head21 = new ListNode(1, head22)
const head22 = new ListNode(3, head23)
const head23 = new ListNode(4, )

var mergeTwoLists = function(l1, l2) {
  const prehead = new ListNode(-1);
  console.log('prehead', prehead, ListNode)
  let prev = prehead;
  while (l1 != null && l2 != null) {
      if (l1.val <= l2.val) {
          prev.next = l1;
          console.log('l1', l1)
          l1 = l1.next;
      } else {
          prev.next = l2;
          l2 = l2.next;
      }
      prev = prev.next;
  }

  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  prev.next = l1 === null ? l2 : l1;

  return prehead.next;
};

mergeTwoLists(head11, head12)