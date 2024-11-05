/**
 * Represents a node in a BST
 * @class Node
 */

class Node {
    /**
     * Creates an instance of Node
     * @param {number} value - The value stored in the node
     */

    constructor(value){
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
    constructor(){
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
    insert(value){
        //create a new Node with the give value
        let newNode = new Node(value)

        //if the tree is empty, set the root to the newNode
        if(!this.root){
            this.root = newNode
        } else {
            //start from the root node
            let currentNode = this.root;

            //find the correct spot for the new node
            while(true){
                //if the value is less than the currentNode's value, go left
                if(value < currentNode.value){
                    //if there is no left child, insert the newNode here 
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this; //exit the loop and method
                    }

                    //if there is a left child, move to the left child and continue the loop
                    currentNode = currentNode.left;
                } else {
                    //if value is greater than or equal to currentNode's value, go right
                    //if there is no right child, insert the newNode here
                    if(!currentNode.right){
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
}


module.exports = BinarySearchTree