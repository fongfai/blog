function Node(value, pre, next) {
  this.value = value;   //当前节点的元素
  this.next = next || null;         //下一个节点链接
  this.prev = pre || null;         //上一个节点链接
}

const node1 = new Node(1)
const node2 = new Node(2, node1, node3)
const node3 = new Node(3, node2)

// [1,2,3] -> [3, 2, 1]
var reverseList = function(head) {
  let prev = null;
  let cur = head;
  while (cur) {
      const temp = cur.next; // 暂存cur.next, 给最后一步后移指针用
      cur.next = prev; // current.next 指向前一节点 pre
      prev = cur; // pre后移 指向 cur
      cur = temp; // cur后移 指向 cur.next
  }
  return prev;
};


const r = reverseList(node1)
console.log('r', r)

// https://leetcode.cn/problems/reverse-linked-list/solutions/2361282/206-fan-zhuan-lian-biao-shuang-zhi-zhen-r1jel/