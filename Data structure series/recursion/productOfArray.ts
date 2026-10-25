/** Use recursion to multiply all values in an array of numbers. For this practice set, an empty array has product 1. Leave the input unchanged.

Signature: `productOfArray(numbers: number[]): number`

Examples: `productOfArray([2, 3, 4]) → 24`, `productOfArray([]) → 1`.*/

export function productOfArray(numbers: number[]): number {
  // base case
  if(numbers.length === 0) return 1

  // multiply
  return numbers[0] * productOfArray(numbers.slice(1))

  throw new Error("productOfArray not implemented");
}

console.log(productOfArray([2, 3, 4]))