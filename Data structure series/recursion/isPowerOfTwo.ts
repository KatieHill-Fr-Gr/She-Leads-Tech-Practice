/** Determine whether integer n equals 2 raised to a non-negative integer exponent. Return a boolean. Inputs range from -(2^31) through 2^31 - 1.

Signature: `isPowerOfTwo(n: number): boolean`

Examples: `isPowerOfTwo(1) → true`, `isPowerOfTwo(16) → true`, `isPowerOfTwo(3) → false`, `isPowerOfTwo(0) → false`.

Solve recursively first, handling zero and negative inputs. Then try the original follow-up without loops or recursion.*/

export function isPowerOfTwo(n: number): boolean {
  // base case
  if(n === 1) return true
  // 
  if(n <= 0 || n % 2 !== 0) return false

  return isPowerOfTwo(n / 2)
}

console.log(isPowerOfTwo(1))