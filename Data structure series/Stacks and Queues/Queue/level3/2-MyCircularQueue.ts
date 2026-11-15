/**
 * 622. Design Circular Queue (Medium)
 * https://leetcode.com/problems/design-circular-queue/
 *
 * Build a first-in, first-out queue of fixed capacity k that can reuse spaces
 * as the indices wrap around. Use an array for storage. Inserts and removals
 * report success or failure.
 * Front and Rear return -1 when the queue is empty.
 *
 * Hint: Can you track the front index and the number of items to find the next insertion slot?
 */
export class MyCircularQueue {
  constructor(k: number) {
    // Store the capacity and initialize the queue.
  }

  enQueue(value: number): boolean {
    throw new Error("TODO: implement enQueue");
  }

  deQueue(): boolean {
    throw new Error("TODO: implement deQueue");
  }

  Front(): number {
    throw new Error("TODO: implement Front");
  }

  Rear(): number {
    throw new Error("TODO: implement Rear");
  }

  isEmpty(): boolean {
    throw new Error("TODO: implement isEmpty");
  }

  isFull(): boolean {
    throw new Error("TODO: implement isFull");
  }
}

// Remove the block comment after implementing the starter to run this example.
/*
const circularQueue = new MyCircularQueue(2);
console.log(circularQueue.enQueue(1), circularQueue.enQueue(2), circularQueue.enQueue(3)); // true true false
circularQueue.deQueue();
circularQueue.enQueue(3);
console.log(circularQueue.Front(), circularQueue.Rear()); // 2 3
*/
