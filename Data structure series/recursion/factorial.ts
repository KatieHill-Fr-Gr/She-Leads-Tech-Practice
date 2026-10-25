/** See Problems.md. Implement using recursion. */
export function factorial(n: number): number {

  if (n === 1) return 1;
  return n * factorial(n - 1);

  throw new Error("factorial not implemented");
}

console.log(factorial(3))
