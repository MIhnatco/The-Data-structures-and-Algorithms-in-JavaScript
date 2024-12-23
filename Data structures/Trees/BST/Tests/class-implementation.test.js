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

  //test cases for 'remove()' method
  describe("remove() method", () => {
    describe(" child with no left child", () => {
      it("remove leaf node (no children)", () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);

        expect(bst.remove(3)).toBe(true);
        expect(bst.root.left.left).toBe(null);
      });

      it("remove node with only left child", () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(2);

        expect(bst.remove(3)).toBe(true);
        expect(bst.root.left.left.value).toBe(2);
      });

      it("remove root node with no right child", () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(3);

        expect(bst.remove(10)).toBe(true);
        expect(bst.root.value).toBe(5);
        expect(bst.root.left.value).toBe(3);
      });
    });

    describe("node with right child which doesn't have a left child", () => {
      it("remove node with only right child that isn't root", () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(8);
        bst.insert(15);
        bst.insert(20);
        bst.insert(25);
        bst.insert(13);

        expect(bst.remove(5)).toBe(true);
        expect(bst.root.left.value).toBe(8);
      });
      it("Remove a node with a right child but no left child at the root", () => {
        bst.insert(10);
        bst.insert(15);

        expect(bst.remove(10)).toBe(true);
        expect(bst.root.value).toBe(15);
      });

      it("Remove a node with a right child but no left child deeper in the tree", () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(13);
        bst.insert(14);

        expect(bst.remove(13)).toBe(true);
        expect(bst.root.right.left.value).toBe(14);
      });
    });

    describe("node with two children", () => {
      it("remove a node with right child that has a left child", () => {
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(12);
        bst.insert(11);

        expect(bst.remove(10)).toBe(true);
        expect(bst.root.value).toBe(11);
      });

      it("assign the leftmost right child to the root", () => {
        bst.insert(30);
        bst.insert(40);
        bst.insert(35);
        bst.insert(32);
        bst.insert(31);

        expect(bst.remove(30)).toBe(true);
        expect(bst.root.value).toBe(31);
        expect(bst.root.right.value).toBe(40);
      });
    });
  });
});
