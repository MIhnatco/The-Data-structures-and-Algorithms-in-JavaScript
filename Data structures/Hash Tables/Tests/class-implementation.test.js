const HashTable = require("../class-implementation");

describe("Hash Table implementation", () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable(50);
  });

  it("set method working properly", () => {
    hashTable.set("name", "Peter");
    hashTable.set("age", 40);
    hashTable.set("occupation", "Engineer");

    expect(hashTable.get("name")).toBe("Peter");
    expect(hashTable.get("age")).toBe(40);
    expect(hashTable.get("occupation")).toBe("Engineer");
  });

  it("handling collision", () => {
    hashTable.set("abc", "Collision1");
    hashTable.set("cba", "Collision2");

    expect(hashTable.get("abc")).toBe("Collision1");
    expect(hashTable.get("cba")).toBe("Collision2");
  });

  it("shouldn't update a value if key exists", () => {
    hashTable.set("key1", "value1");
    hashTable.set("key1", "value2");

    const index = hashTable._hash("key1");
    expect(hashTable.data[index][0][1]).toBe("value1");
  });

  it("should remove a value", () => {
    hashTable.set("key1", "value1");
    hashTable.remove("key1");
    const index = hashTable._hash("key1");
    expect(hashTable.data[index]).toStrictEqual([]);
  });

  it("should return all keys", () => {
    hashTable.set("key1", "value1");
    hashTable.set("key2", "value2");

    const keys = hashTable.keys();
    expect(keys).toContain("key1");
    expect(keys).toContain("key2");
  });
});
