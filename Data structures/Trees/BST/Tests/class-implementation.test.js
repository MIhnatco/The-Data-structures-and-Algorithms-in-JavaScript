const BinarySearchTree = require("../class-implementation.js");

describe("BST class implementation", () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  it("initial BST state", () => {
    expect(bst.root).toBe(null);
  });

  //testing 'insert()' method
  describe("insert() method", () => {
    it("inserting a value", () => {
      bst.insert(10);

      expect(bst.root.value).toBe(10);
      expect(bst.root.left).toBe(null);
      expect(bst.root.right).toBe(null);
    });

    it("inserting to the left child", () => {
      bst.insert(10);
      bst.insert(8);

      expect(bst.root.value).toBe(10);
      expect(bst.root.left.value).toBe(8);
      expect(bst.root.right).toBe(null);
    });
    it("inserting to the right child", () => {
      bst.insert(10);
      bst.insert(12);

      expect(bst.root.value).toBe(10);
      expect(bst.root.right.value).toBe(12);
      expect(bst.root.left).toBe(null);
    });

    it("inserting mutliple values and verifying the tree structure", () => {
      bst.insert(10);
      bst.insert(8);
      bst.insert(15);
      bst.insert(4);
      bst.insert(14);

      expect(bst.root.value).toBe(10);
      expect(bst.root.left.value).toBe(8);
      expect(bst.root.right.value).toBe(15);
      expect(bst.root.left.left.value).toBe(4);
      expect(bst.root.right.left.value).toBe(14);
    });

    it("inserting a duplicate value", () => {
      bst.insert(10);
      bst.insert(10);

      expect(bst.root.value).toBe(10);
      expect(bst.root.right.value).toBe(10);
    });
  });

  //test cases for 'lookup()' method
  describe("lookup() method", () => {
    it("empty BST, returns false", () => {
      expect(bst.lookup()).toBe(false);
    });

    it("BST with one node, root value equals to the looked value", () => {
      bst.insert(10);

      expect(bst.lookup(10)).toBe(true);
    });

    it("BST with one node, returns false for non-existing value", () => {
      bst.insert(10);

      expect(bst.lookup(20)).toBe(false);
    });

    it("value is not in the BST", () => {
      bst.insert(10);
      bst.insert(8);
      bst.insert(12);
      bst.insert(9);
      bst.insert(11);

      expect(bst.lookup(20)).toBe(false);
    });

    it("value found in left subtree", () => {
      bst.insert(10);
      bst.insert(8);
      bst.insert(12);
      bst.insert(9);
      bst.insert(11);

      expect(bst.lookup(9)).toBe(true);
    });
    it("value found in right subtree", () => {
      bst.insert(10);
      bst.insert(8);
      bst.insert(12);
      bst.insert(9);
      bst.insert(11);

      expect(bst.lookup(12)).toBe(true);
    });

    it("undefined value, returns false", () => {
      expect(bst.lookup(undefined)).toBe(false);
    });
    it("null value, returns false", () => {
      expect(bst.lookup(null)).toBe(false);
    });

    it("very large number, returns true", () => {
      bst.insert(Number.MAX_SAFE_INTEGER);

      expect(bst.lookup(Number.MAX_SAFE_INTEGER)).toBe(true);
    });
    it("very small number, returns true", () => {
      bst.insert(Number.MIN_SAFE_INTEGER);

      expect(bst.lookup(Number.MIN_SAFE_INTEGER)).toBe(true);
    });

    it("lookup with huge amount of nodes", () => {
      for (let i = 0; i < 10000; i++) {
        bst.insert(i);
      }

      expect(bst.lookup(9999)).toBe(true);
      expect(bst.lookup(10000)).toBe(false);
    });
  });
});
