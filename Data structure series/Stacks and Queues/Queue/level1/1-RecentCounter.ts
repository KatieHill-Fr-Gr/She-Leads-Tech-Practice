/**
 * 933. Number of Recent Calls (Easy)
 * https://leetcode.com/problems/number-of-recent-calls/
 *
 * Each call to ping(t) records a request and counts requests from t - 3000
 * through t, including both endpoints. Timestamps arrive in increasing order.
 *
 * Hint: Once the oldest request is within the window, what do you know about the rest?
 */

//TODO Declare a class
export class RecentCounter {
  timestamps = []

  constructor() {
    // Initialize the queue here or in a class field.
    this.timestamps = []
  }

  // time is in milliseconds
  // return number of requests
  // [time - 3000, time]

  ping(t: number): number {
    throw console.error();
    
    // 1: push the new request to the timestamps queue
    // 2: specify the cutoff so anything over 3000 milliseconds is out of the allowed timeframe
    // 3: set up a while loop for as long as request is within 3000 milliseconds limit - or the base case
    // 4: use shift to pop it out if it's not within the range ( shift() method of Array instances removes the first element from an array and returns that removed element.)
    // 5: return the timestamps.length
  }
}

// Remove the block comment after implementing the starter to run this example.
/*
const counter = new RecentCounter();
console.log([1, 100, 3001, 3002].map((t) => counter.ping(t))); // [1, 2, 3, 3]
*/
