const BinarySearchTree = require("../class-implementation.js");

describe("BST class implementation", () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  it("initial BST state", () => {
    expect(bst.root).toBe(null);
  });

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
