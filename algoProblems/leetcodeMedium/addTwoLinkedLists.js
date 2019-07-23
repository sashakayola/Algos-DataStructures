// https://leetcode.com/problems/add-two-numbers/
// APPROACH: add the two linked lists as we would add any two numbers
// add the digits that line up together and add any carry over numbers
// if the result of adding the two digits + carry > 10 then next time, carry over 1
// if one list is longer than the other, add any left overs (plus carry overs) to the new list
// if you have added all the digits of the two lists but there is a carry, add that too
// Time complexity : O(max(m, n)). Assume that m and n represents the length of l1 and l2
// Space complexity : O(max(m, n). The length of the new list is at most max(m,n) + 1 (if there is a carry)
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0)
    let carryOver = 0;
    let current = result;
    
    while (l1 && l2) {
        let res = l1.val + l2.val + carryOver;
        current.next = new ListNode(res % 10);
        carryOver = 0;
        if (res >= 10) {
            carryOver++;   
        }
        l1 = l1.next;
        l2 = l2.next;
        current = current.next
    }
    
    while (l1) {
        let res = l1.val + carryOver;
        current.next = new ListNode(res % 10);
        carryOver = 0;
        if (res >= 10) {
            carryOver++;
        }
        l1 = l1.next;
        current = current.next
    }

    while (l2) {
        let res = l2.val + carryOver;
        current.next = new ListNode(res % 10);
        carryOver = 0;
        if (res >= 10) {
            carryOver++;
        }
        l2 = l2.next;
        current = current.next
    }

    if (carryOver > 0) {
        current.next = new ListNode(carryOver)
    }
    
    return result.next;
};
