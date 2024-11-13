/**
 * Represents a node in a BST
 * @class Node
 */

class Node {
  /**
   * Creates an instance of Node
   * @param {number} value - The value stored in the node
   */

  constructor(value) {
    /**
     * The left child node
     * @type {Node|null}
     */
    this.left = null;

    /**
     * The right child node
     * @type {Node|null}
     */
    this.right = null;

    /**
     * The value stored in the node
     * @type {number}
     */
    this.value = value;
  }
}

/**
 * Represents a Binary Search Tree
 * @class BinarySearchTree
 */

class BinarySearchTree {
  /**
   * Creates an instance of BinarySearchTree
   */
  constructor() {
    /**
     * The root node of the Binary Search Tree
     * @type {Node|null}
     */
    this.root = null;
  }

  /**
   * Inserts a value into the BST
   * @param {*} value - The value to be inserted
   * @returns {BinarySearchTree} The current instance of the Binary Search Tree.
   *
   * Time complexity: O(log n) on average, O(n) in the worst case (unbalanced tree)
   */
  insert(value) {
    //create a new Node with the give value
    let newNode = new Node(value);

    //if the tree is empty, set the root to the newNode
    if (!this.root) {
      this.root = newNode;
    } else {
      //start from the root node
      let currentNode = this.root;

      //find the correct spot for the new node
      while (true) {
        //if the value is less than the currentNode's value, go left
        if (value < currentNode.value) {
          //if there is no left child, insert the newNode here
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this; //exit the loop and method
          }

          //if there is a left child, move to the left child and continue the loop
          currentNode = currentNode.left;
        } else {
          //if value is greater than or equal to currentNode's value, go right
          //if there is no right child, insert the newNode here
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this; //exit the lopp and method
          }

          //if there is a right chid, move to the right child and continue the loop
          currentNode = currentNode.right;
        }
      }
    }

    return this; //current instance of the tree
  }

  /**
   * Looks up a value in the tree
   * @param {*} value - The value to be looked up
   * @returns {boolean} - True if the value is found, false otherwise
   *
   * Time complexity: O(log n) on average, O(n) in the worst case (unbalanced tree)
   */

  lookup(value) {
    //start from the root of BST
    let currentNode = this.root;

    //if the BST is empty return false (value is not found)
    if (!currentNode) {
      return false;
    }

    //Traverse the BST
    while (currentNode !== null) {
      //If the value is found return true
      if (currentNode.value === value) {
        return true;

        //If the value is less than the current node's value, traverse the left subtree
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;

        //Otherwise,  traverse right subtree
      } else {
        currentNode = currentNode.right;
      }
    }

    //Return false if the value is not in the BST
    return false;
  }

  // Method to display the BST
  display(node = this.root, space = 0, height = 10) {
    // Base case
    if (node === null) {
      return;
    }
    // Increase distance between levels
    space += height;
    // Process right child first
    this.display(node.right, space);
    // Print current node after space
    console.log();
    for (let i = height; i < space; i++) {
      process.stdout.write(" ");
    }
    console.log(node.value);
    // Process left child
    this.display(node.left, space);
  }

  /**
   * Removes a value from the tree
   * @param {*} value - The value to be removed
   *
   * Time complexity: O(log n) on average, O(n) in the worst case (unbalanced tree)
   */
  remove(value) {
    //setting currentNode to the root of the BST
    let currentNode = this.root;

    //to keep track of parent node for currentNode
    let parentNode = null;

    //empty BST
    if (!currentNode) {
      return false;
    }

    //traversing the tree until it hits a leaf
    while (currentNode !== null) {
      //the deleted value is somewhere in the left subtree
      if (value < currentNode.value) {
        parentNode = currentNode;

        currentNode = currentNode.left;

        //the deleted value is somewhere in the right subtree
      } else if (value > currentNode.value) {
        parentNode = currentNode;

        currentNode = currentNode.right;

        //we found our value
      } else if (currentNode.value === value) {
        //1) no right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //left child
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //right child
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //2) right child which doesn't have a left child
        } else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            currentNode.right.left = currentNode.left;

            //if parent > current, right child becomes parent's left
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, right child becomes parent's right
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        }

        return true;
      }
    }
    return false; //value not found
  }
}

module.exports = BinarySearchTree;

// Create a new BST and insert values
/*
const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(10);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(20);
bst.insert(30);
bst.insert(3);

// Display the BST before removal
console.log("BST before removal:");
bst.display();
// Remove node with value 5
bst.remove(5);
// Display the BST after removal
console.log("\nBST after removal:");
bst.display();

*/
