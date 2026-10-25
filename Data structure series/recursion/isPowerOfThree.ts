/** Examples: `isPowerOfThree(27) → true`, `isPowerOfThree(1) → true`, `isPowerOfThree(0) → false`, `isPowerOfThree(-1) → false`.
 */
export function isPowerOfThree(n: number): boolean {
  // TODO: implement the base case and recursive step.
 // base case
  if(n === 1) return true

  // 
  if(n <= 0 || n % 3 !== 0) return false

  return isPowerOfThree(n / 3)


  throw new Error("isPowerOfThree not implemented");
}

console.log(isPowerOfThree(0))