/** Return the base raised to the exponent using recursion. Assume a non-negative base and a non-negative integer exponent. Do not use Math.pow or **.

Signature: `power(base: number, exponent: number): number`

Examples: `power(2, 0) → 1`, `power(2, 4) → 16`. */

export function power(base: number, exponent: number): number {
  //  base case
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
};

console.log(power(3, 9))

// base is only every 1 integer (the one entered as an argument)
// so base * power(base, exponent - 1) is literally: 
//    3 x 3x(3, 8)