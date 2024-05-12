/* 
作者：力扣官方题解
链接：https://leetcode.cn/problems/design-linked-list/solutions/1840997/she-ji-lian-biao-by-leetcode-solution-abix/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

// 单链表
{
  var MyLinkedList = function () {
    this.size = 0;
    this.head = new ListNode(0);
  };

  MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) {
      return -1;
    }
    let cur = this.head;
    for (let i = 0; i <= index; i++) {
      cur = cur.next;
    }
    return cur.val;
  };

  MyLinkedList.prototype.addAtHead = function (val) {
    this.addAtIndex(0, val);
  };

  MyLinkedList.prototype.addAtTail = function (val) {
    this.addAtIndex(this.size, val);
  };

  MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.size) {
      return;
    }
    index = Math.max(0, index);
    this.size++;
    let pred = this.head;
    for (let i = 0; i < index; i++) {
      pred = pred.next;
    }
    let toAdd = new ListNode(val);
    toAdd.next = pred.next;
    pred.next = toAdd;
  };

  MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) {
      return;
    }
    this.size--;
    let pred = this.head;
    for (let i = 0; i < index; i++) {
      pred = pred.next;
    }
    pred.next = pred.next.next;
  };

  function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }


}

/* 双向链表 */

{
  var MyLinkedList = function () {
    this.size = 0;
    this.head = new ListNode(0);
    this.tail = new ListNode(0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  };

  MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) {
      return -1;
    }
    let curr;
    if (index + 1 < this.size - index) {
      curr = this.head;
      for (let i = 0; i <= index; i++) {
        curr = curr.next;
      }
    } else {
      curr = this.tail;
      for (let i = 0; i < this.size - index; i++) {
        curr = curr.prev;
      }
    }
    return curr.val;
  };

  MyLinkedList.prototype.addAtHead = function (val) {
    this.addAtIndex(0, val);
  };

  MyLinkedList.prototype.addAtTail = function (val) {
    this.addAtIndex(this.size, val);
  };

  MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.size) {
      return;
    }
    index = Math.max(0, index);
    let pred, succ;
    if (index < this.size - index) {
      pred = this.head;
      for (let i = 0; i < index; i++) {
        pred = pred.next;
      }
      succ = pred.next;
    } else {
      succ = this.tail;
      for (let i = 0; i < this.size - index; i++) {
        succ = succ.prev;
      }
      pred = succ.prev;
    }
    this.size++;
    const toAdd = new ListNode(val);
    toAdd.prev = pred;
    toAdd.next = succ;
    pred.next = toAdd;
    succ.prev = toAdd;
  };



  MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) {
      return;
    }
    let pred, succ;
    if (index < this.size - index) {
      pred = this.head;
      for (let i = 0; i < index; i++) {
        pred = pred.next;
      }
      succ = pred.next.next;
    } else {
      succ = this.tail;
      for (let i = 0; i < this.size - index - 1; i++) {
        succ = succ.prev;
      }
      pred = succ.prev.prev;
    }
    this.size--;
    pred.next = succ;
    succ.prev = pred;
  };

  function ListNode(val, next, prev) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
    this.prev = (prev === undefined ? null : next)
  }

}