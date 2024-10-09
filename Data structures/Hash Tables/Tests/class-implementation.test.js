const HashTable = require("../class-implementation");

describe("Hash Table implementation", () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable(137);
  });

  it("set method working properly", () => {
    hashTable.set("name", "Peter");
    hashTable.set("age", 40);
    hashTable.set("occupation", "Engineer");

    expect(hashTable.get("name")).toBe("Peter");
    expect(hashTable.get("age")).toBe(40);
    expect(hashTable.get("occupation")).toBe("Engineer");
  });

  it("should hash a key to a valid index", () => {
    const index = hashTable._hash("testKey");

    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(137);
  });

  it("handling collision", () => {
    hashTable.set("abc", "Collision1");
    hashTable.set("cba", "Collision2");

    expect(hashTable.get("abc")).toBe("Collision1");
    expect(hashTable.get("cba")).toBe("Collision2");
  });

  it("should update a value if key exists", () => {
    hashTable.set("key1", "value1");
    hashTable.set("key1", "value2");

    const index = hashTable._hash("key1");
    expect(hashTable.data[index][0][1]).toBe("value2");
  });

  it("should remove a value", () => {
    hashTable.set("key1", "value1");
    hashTable.remove("key1");
    const index = hashTable._hash("key1");
    expect(hashTable.data[index]).toStrictEqual([]);
  });

  it("returns true if contains a key", () => {
    hashTable.set("key1", "value1");
    hashTable.set("key2", "value2");

    expect(hashTable.hasKey("key2")).toBe(true);
  });

  it("returns false if doesn't contain the key", () => {
    hashTable.set("key1", "value1");
    hashTable.set("key2", "value2");

    expect(hashTable.hasKey("key3")).toBe(false);
  });

  it("should return all keys", () => {
    hashTable.set("key1", "value1");
    hashTable.set("key2", "value2");

    //Get the keys from the hash table
    const keys = hashTable.keys();

    //Check if it contains the expected values
    expect(keys).toContain("key1");
    expect(keys).toContain("key2");
  });

  it("should return all values", () => {
    // Add key-value pairs
    hashTable.set("key1", "value1");
    hashTable.set("key2", "value2");
    hashTable.set("key3", "value3");

    // Get the values from the hash table
    const values = hashTable.values();

    //Check if it contains the expected values
    expect(values).toContain("value1");
    expect(values).toContain("value2");
    expect(values).toContain("value3");
  });

  it("should return undefined if empty", () => {
    expect(hashTable.values()).toBe(undefined);
  });

  it("should return all entries", () => {
    hashTable.set("key1", "value1");
    hashTable.set("key2", "value2");

    let entries = hashTable.entries();

    expect(entries.length).toBe(2);
    expect(entries[0]).toStrictEqual(["key1", "value1"]);
    expect(entries[1]).toStrictEqual(["key2", "value2"]);
  });

  it("if no entries, undefind", () => {
    expect(hashTable.entries()).toBe(undefined);
  });
});
