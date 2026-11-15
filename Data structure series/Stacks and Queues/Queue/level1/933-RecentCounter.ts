/**
 * 933. Number of Recent Calls (Easy)
 * https://leetcode.com/problems/number-of-recent-calls/
 *
 * Each call to ping(t) records a request and counts requests from t - 3000
 * through t, including both endpoints. Timestamps arrive in increasing order.
 *
 * Hint: Once the oldest request is within the window, what do you know about the rest?
 */
export class RecentCounter {
  constructor() {
    // Initialize the queue here or in a class field.
  }

  ping(t: number): number {
    throw new Error("TODO: implement ping");
  }
}

// Remove the block comment after implementing the starter to run this example.
/*
const counter = new RecentCounter();
console.log([1, 100, 3001, 3002].map((t) => counter.ping(t))); // [1, 2, 3, 3]
*/
