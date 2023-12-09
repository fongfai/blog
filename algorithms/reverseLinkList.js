function Node(value) {
  this.value = value;   //当前节点的元素
  this.next = null;         //下一个节点链接
  this.prev = null;         //上一个节点链接
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)

node1.next = node2;

node2.next = node3;


// [1,2,3] -> [3, 2, 1]
var reverseList = function(head) {
  let prev = null;
  let cur = head;
  while (cur) {
      const temp = cur.next; // 暂存后继节点 cur.next
      cur.next = prev; // 修改 next 引用指向
      prev = cur; // pre 暂存 cur
      cur = temp; // cur 访问下一节点
  }
  return prev;
};


const r = reverseList(node1)
console.log('r', r)

// https://leetcode.cn/problems/reverse-linked-list/solutions/2361282/206-fan-zhuan-lian-biao-shuang-zhi-zhen-r1jel/