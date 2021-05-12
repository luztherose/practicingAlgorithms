/*
  Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
*/

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const mergeTwoLists = function(l1, l2) {

  if (l1 == null) {
          return l2;
      }
      else if (l2 == null) {
          return l1;
      }
      else if (l1.val < l2.val) {
          l1.next = mergeTwoLists(l1.next, l2);
          return l1;
      }
      else {
          l2.next = mergeTwoLists(l1, l2.next);
          return l2;
      }

};


//console.log(mergeTwoLists([], [0]));
console.log(mergeTwoLists([1,2,4], [1,3,4]));



