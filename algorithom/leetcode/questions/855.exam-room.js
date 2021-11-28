/*
 * @lc app=leetcode id=855 lang=javascript
 *
 * [855] Exam Room
 *
 * https://leetcode.com/problems/exam-room/description/
 *
 * algorithms
 * Medium (43.44%)
 * Likes:    871
 * Dislikes: 339
 * Total Accepted:    42.9K
 * Total Submissions: 98.6K
 * Testcase Example:  '["ExamRoom","seat","seat","seat","seat","leave","seat"]\n' +
  '[[10],[],[],[],[],[4],[]]'
 *
 * There is an exam room with n seats in a single row labeled from 0 to n - 1.
 * 
 * When a student enters the room, they must sit in the seat that maximizes the
 * distance to the closest person. If there are multiple such seats, they sit
 * in the seat with the lowest number. If no one is in the room, then the
 * student sits at seat number 0.
 * 
 * Design a class that simulates the mentioned exam room.
 * 
 * Implement the ExamRoom class:
 * 
 * 
 * ExamRoom(int n) Initializes the object of the exam room with the number of
 * the seats n.
 * int seat() Returns the label of the seat at which the next student will
 * set.
 * void leave(int p) Indicates that the student sitting at seat p will leave
 * the room. It is guaranteed that there will be a student sitting at seat
 * p.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input
 * ["ExamRoom", "seat", "seat", "seat", "seat", "leave", "seat"]
 * [[10], [], [], [], [], [4], []]
 * Output
 * [null, 0, 9, 4, 2, null, 5]
 * 
 * Explanation
 * ExamRoom examRoom = new ExamRoom(10);
 * examRoom.seat(); // return 0, no one is in the room, then the student sits
 * at seat number 0.
 * examRoom.seat(); // return 9, the student sits at the last seat number 9.
 * examRoom.seat(); // return 4, the student sits at the last seat number 4.
 * examRoom.seat(); // return 2, the student sits at the last seat number 2.
 * examRoom.leave(4);
 * examRoom.seat(); // return 5, the student sits at the last seat number
 * 5.
 * 
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= n <= 10^9
 * It is guaranteed that there is a student sitting at seat p.
 * At most 10^4 calls will be made to seat and leave.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 */
var ExamRoom = function(n) {
    
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
    
};

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
    
};

/** 
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
// @lc code=end