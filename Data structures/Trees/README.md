# Trees in JavaScript

This section focuses on the **Trees** data structure in JavaScript, including Binary Trees, AVL Trees, Read and Black Trees, Heaps. **Trees** are a important data structure with use in databases, file systems and many different algorithms.

## Table of Contents

- [Overview](#overview)
- [Types of Trees](#types-of-trees)
- [Common Operations](#common-operations)
- [Resources](#resources)

## Overview

A _Tree_ is a hierarchical data structure consisting of nodes, where each node has a parent and zero or more children. There is a single node as the _root_. This structure allows for efficinet searching, insertion, and deletion operations. _Trees_ are used in scenarios where data needs to be structured hierarchically, such as representing a file system or organized sorted data.

### Key Characteristics of Trees

- **Root node:** The top node of the tree
- **Parent node:** A node taht has one or more child nodes connected to it.
- **Children nodes:** These are nodes that are directly connected to a parent node. Each child node is a descendant of a parent node.
- **Leaves:** Nodes that don't have any children. They represent the end points of a tree.
- **Siblings** Nodes that share the same parent node. They are at the same level in the tree.
- **Subtrees:** Any branch of the tree that includes a node and all its descendants.
- **Edge:** A connection between two nodes in the tree.
- **Path:** The series of nodes and edges you travel to get from one node to another node.
- **Tree traversal:** The process of visiting all the nodes in a tree in a particular oreder. There are methods like 'In-order', 'Pre-order' and 'Post-order', each with a different sequence of visiting nodes.
- **Height:** The number of edges from the root node to the deepest leaf. It measures how tall a tree or subtree is.
- **Depth:** The number of edges from the root node to the specific node. For example, the root node is at depth 0, its children are at depth 1 and so on.

## Types of Trees

**1. Binary Tree**
A Binary tree is a hierarchical data structure where each node has _at most two children_, refered to as the _left_ and _right_ children. - Perfect BT - Full BT - Complete BT

**2. Binary Search Tree (BST)**
BST is a type of a _binary tree_ with the property that each node's left subtree contains values less thna the node's key, and each node's right subtree contains values greater than the node's key. - Balanced BST - Unbalanced BST

**3. AVL Tree**
A type of _self-balancing binary search tree_, where the difference in heights of left and right subtrees of any node is at most one. This balance improves search, insertion, and deletion times.

**4. Heap**
A _complete binary tree_ that satisfies the heap property - _Min-Heap:_ The value of each parent nodes is less than or equal to the values of its children. - _Max-Heap:_ The value of each parent node is greater that or equal to the value of its children.
Heaps are used in priority queues and sorting algorithms.

**5. Other Trees**
Includes structures such as Red-Black Trees, Tries, and B-Trees, which offer specific advantages for particular use cases.

## Common Operations
Each tree type supports a variety of operations, such as: 

- **Insertion:** Add a new node to the tree while maintaining the tree's proportions.
- **Deletion:** Remove a node while preserving the tree's structure.
- **Searching:** Find a node by value.
- **Traversal:** 
    - **In-order Traversal:** Left, Root, Right
    - **Pre-order Traversal:** Root, Left, Rigth
    - **Post-order Traversal:** Left, Right, Root
    - **Level-order Traversal:** Visit nodes level by level, typically implemented using a queue.
- **Balancing:** Re-structure the tree to ensure minimal height (AVL)


## Resources 
- [zerotomastery.io](https://zerotomastery.io/)
- [algoexpert.io](https://algoexpert.io/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [JavaScript.info](https://javascript.info/)
- Data Structures and Algorithms with JavaScript by Michael McMillan.