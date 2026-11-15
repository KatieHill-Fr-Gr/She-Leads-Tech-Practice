/**
 * 102. Binary Tree Level Order Traversal (Medium)
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 *
 * Return a list of the tree's levels, from the root down. Within each level,
 * list node values from left to right.
 *
 * Hint: How many nodes are already waiting at the start of a level, before you add any children?
 */
// LeetCode provides TreeNode. This definition lets you build trees locally.
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function levelOrder(root: TreeNode | null): number[][] {
  throw new Error("TODO: implement levelOrder");
}

// Remove the block comment after implementing the starter to run this example.
/*
const root = new TreeNode(3, new TreeNode(9), new TreeNode(20));
console.log(levelOrder(root)); // [[3], [9, 20]]
*/
