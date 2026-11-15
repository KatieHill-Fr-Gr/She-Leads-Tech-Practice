/**
 * 682. Baseball Game (Easy)
 * https://leetcode.com/problems/baseball-game/
 *
 * Apply the scoring operations in order. A number adds that score, "+" adds
 * the sum of the last two, "D" adds twice the last score, and "C" removes the
 * last score. Return the sum of the scores that remain.
 *
 * Hint: Which end of an array gives you quick access to the newest score and the one before it?
 */
export function calPoints(operations: string[]): number {
  let stack: number[] = [];

  const opr1 = ["C", "D", "+"];

  for (let i = 0; i < operations.length; i++) {
    if (!opr1.includes(operations[i])) {
      stack.push(+operations[i]);
    } else if (operations[i] === "C") {
      stack.pop();
    } else if (operations[i] === "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else if (operations[i] === "+") {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    }
  }

  return stack.reduce((acc, curr) => acc + curr, 0);
}

console.log(calPoints(["5", "2", "C", "D", "+"])); // 30

