// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
  constructor(value, next) {
    this.val = value;
    this.next = next;
  }
}
var addTwoNumbers = function (l1, l2) {
  // 定义头节点和尾节点为 null，用于构建结果链表
  let head = null,
    tail = null;
  // 初始化进位为 0
  let carry = 0;
  // 当 l1 或 l2 都不为 null 时，执行循环
  while (l1 || l2) {
    // 获取当前 l1 和 l2 节点的值，若为空则默认为 0
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    // 计算当前位的和，包括进位
    const sum = n1 + n2 + carry;
    /* 
      如果结果链表为空（head 为 null）：
      创建一个新的节点，节点的值为相加结果的个位数（sum % 10）。
      将头节点 head 和尾节点 tail 都指向这个新节点，因为这是第一个节点，所以它同时也是头节点和尾节点。
      如果结果链表不为空：

      在已有的链表末尾添加一个新节点，节点的值同样是相加结果的个位数（sum % 10）。
      将当前尾节点 tail 的 next 指针指向新创建的节点，然后更新尾节点 tail 为新添加的节点，使其成为新的尾节点。
      这段代码的作用是根据结果链表是否为空，动态地创建新的节点并将其添加到结果链表的尾部。如果是第一个节点，就同时更新头节点和尾节点；如果已经有节点，就将新节点添加到尾节点后面，并更新尾节点指针。 */
    if (!head) {
      head = tail = new ListNode(sum % 10);
    } else {
      // 若不为空，则将新节点连接到尾节点后面，并更新尾节点为新的节点
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }
    // 更新进位
    carry = Math.floor(sum / 10);
    // 移动到下一个节点，如果节点存在的话
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  // 循环结束后，检查最后一位是否有进位，有的话在结果链表末尾添加新节点
  if (carry > 0) {
    tail.next = new ListNode(carry);
  }
  // 返回结果链表的头节点
  return head;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/add-two-numbers/solutions/435246/liang-shu-xiang-jia-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

const head13 = new ListNode(3);
const head12 = new ListNode(4, head13);
const l1 = new ListNode(2, head12);

const head23 = new ListNode(4);
const head22 = new ListNode(6, head23);
const l2 = new ListNode(5, head22);

const result = addTwoNumbers(l1, l2);
console.log(result);
