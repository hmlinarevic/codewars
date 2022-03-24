/*

  Given a node object representing a binary tree:

  Node:
    value: <int>,
    left: <Node> or null,
    right: <Node> or null
  write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.

  Examples:

  10
  | \
  1  2
  => 13

  1
  | \
  0  0
      \
      2
  => 3

*/

const sumTheTreeValues = (tree) => {
  let total = 0;

  const addNodeValuesToTotal = (node) => {
    if (node.left) addNodeValuesToTotal(node.left);
    if (node.right) addNodeValuesToTotal(node.right);
    if (!node.value) return;
    total += node.value;
  };

  addNodeValuesToTotal(tree);
  console.log(total);
};

sumTheTreeValues({
  value: 11,
  left: { value: 0, left: null, right: null },
  right: { value: 0, left: null, right: { value: 1, left: null, right: null } },
});

//----------------
// other solutions
//----------------

function sumTheTreeValues1(root) {
  return !root
    ? 0
    : root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
}
