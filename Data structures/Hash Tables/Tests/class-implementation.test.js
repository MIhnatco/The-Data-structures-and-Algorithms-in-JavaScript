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
    expect(hashTable.data[index]).toStrictEqual(undefined);
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

  describe("keys() method", () => {
    it("should return all keys", () => {
      hashTable.set("key1", "value1");
      hashTable.set("key2", "value2");

      //Get the keys from the hash table
      const keys = hashTable.keys();

      //Check if it contains the expected values
      expect(keys).toContain("key1");
      expect(keys).toContain("key2");
    });

    it("should return empty array if empty", () => {
      let result = hashTable.keys();

      expect(result).toStrictEqual([]);
    });

    it("handles collisions and returns all keys", () => {
      //small catalog size to force collisions
      let smallCatalog = new HashTable(3);

      smallCatalog.set("key1", "value1");
      smallCatalog.set("key2", "value2");
      smallCatalog.set("key3", "value3");

      let result = smallCatalog.keys();

      //all keys returned despite collisions
      expect(result).toContain("key1");
      expect(result).toContain("key2");
      expect(result).toContain("key3");
    });

    it("does not include deleted keys", () => {
      hashTable.set("key1", "value1");
      hashTable.set("key2", "value2");

      hashTable.remove("key1");

      let result = hashTable.keys();
      expect(result).toStrictEqual(["key2"]);
    });

    it("handles large number of keys", () => {
      for (let i = 0; i < 1000; i++) {
        hashTable.set(`key${i}`, `value${i}`);
      }

      let result = hashTable.keys();

      expect(result.length).toBe(1000);
      expect(result).toContain("key500"); //specific key
    });
  });

  describe("values() method", () => {
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

    it("should return empty array if empty", () => {
      let result = hashTable.values();

      expect(result).toStrictEqual([]);
    });

    it("handles collisions and returns all values", () => {
      //small catalog size to force collisions
      let smallCatalog = new HashTable(3);

      smallCatalog.set("key1", "value1");
      smallCatalog.set("key2", "value2");
      smallCatalog.set("key3", "value3");

      let result = smallCatalog.values();

      //all keys returned despite collisions
      expect(result).toContain("value1");
      expect(result).toContain("value2");
      expect(result).toContain("value3");
    });

    it("does not include deleted values", () => {
      hashTable.set("key1", "value1");
      hashTable.set("key2", "value2");

      hashTable.remove("key1");

      let result = hashTable.values();
      expect(result).toStrictEqual(["value2"]);
    });

    it("handles large number of values", () => {
      for (let i = 0; i < 1000; i++) {
        hashTable.set(`key${i}`, `value${i}`);
      }

      let result = hashTable.values();

      expect(result.length).toBe(1000);
      expect(result).toContain("value500"); //specific key
    });
  });

  describe("entries() method", () => {
    it("should return all entries", () => {
      hashTable.set("key1", "value1");
      hashTable.set("key2", "value2");

      let entries = hashTable.entries();

      expect(entries.length).toBe(2);
      expect(entries[0]).toStrictEqual(["key1", "value1"]);
      expect(entries[1]).toStrictEqual(["key2", "value2"]);
    });
  });

  it("clear the hash table", () => {
    hashTable.set("key1", "value1");
    hashTable.set("key2", "value2");

    hashTable.clear();

    expect(hashTable.entries()).toBe(undefined);
  });

  it("should count the number of entries", () => {
    hashTable.set("key1", "value1");
    hashTable.set("key2", "value2");
    hashTable.set("key3", "value3");

    let totalCount = hashTable.size();

    expect(totalCount).toBe(3);
  });

  it("empty hash table returns 0", () => {
    let totalCount = hashTable.size();
    expect(totalCount).toBe(0);
  });
});
