/**
 * 1047. Remove All Adjacent Duplicates In String (Easy)
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 *
 * Repeatedly delete pairs of equal adjacent letters. Return the string left when no such pair remains.
 *
 * Hint: As you read each letter, which earlier letter could now become its neighbor?
 */
export function removeDuplicates(s: string): string {
  // stack
  let count: string[] = []

  // loop
  for (let i = 0; i < s.length; i++) {
    if(s[i] === count[count.length - 1]) {
      count.pop()
    } else {
      count.push(s[i])
    }

  }

  return count.join("")
}

console.log(removeDuplicates("azxxzy")); // "ca"

