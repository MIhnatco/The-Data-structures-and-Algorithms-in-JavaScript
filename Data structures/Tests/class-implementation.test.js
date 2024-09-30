const TheArray = require("../Arrays/class-implementation");

describe("TheArray - class implementation", () => {
  let arr;

  beforeEach(() => {
    arr = new TheArray();
  });

  describe("get() method", () => {
    it("should return the correct item at a given index", () => {
      arr.push(1);
      arr.push(2);

      expect(arr.get(0)).toBe(1);
      expect(arr.get(1)).toBe(2);
    });

    it("should throw an error if index is out of bounds", () => {
      expect(() => arr.get(-1)).toThrow("Index -1 out of bounds.");
      expect(() => arr.get(1)).toThrow("Index 1 out of bounds.");
    });
  });

  describe("push() method", () => {
    it("should append an item to the end of the array", () => {
      arr.push(1);
      arr.push(2);

      expect(arr.get(0)).toBe(1);
      expect(arr.get(1)).toBe(2);
      expect(arr.length).toBe(2);
    });

    it("should throw an error if the item is undefined", () => {
      expect(() => arr.push(undefined).toThrow("The item can't be undefined."));
    });

    it("should handle pushing different types of items", () => {
      arr.push(1);
      arr.push("string");
      arr.push({ key: "value" });

      expect(arr.get(0)).toBe(1);
      expect(arr.get(1)).toBe("string");
      expect(arr.get(2)).toStrictEqual({ key: "value" });
      expect(arr.length).toBe(3);
    });

    it("should handle pushing null as a valid item", () => {
      arr.push(null);
      expect(arr.get(0)).toBeNull();
      expect(arr.length).toBe(1);
    });

    it("should handle large number of items", () => {
      for (let i = 0; i < 10000; i++) {
        arr.push(i);
      }

      expect(arr.length).toBe(10000);
      expect(arr.get(9999)).toBe(9999);
    });

    it("should handle non-integer indices gracefully", () => {
      arr.push("a");
      expect(() => arr.get("1")).toThrow("Index 1 out of bounds");
      expect(() => arr.get(1.5)).toThrow("Index 1.5 out of bounds");
    });
  });

  describe("pop() method", () => {
    it("should throw an error if the array is empty", () => {
      expect(() => arr.pop()).toThrow("Array is empty");
    });

    it("should remove the last item and return it", () => {
      arr.push(1);
      arr.push(2);
      arr.push(3);

      expect(arr.pop()).toBe(3);
      expect(arr.length).toBe(2);
      expect(arr.pop()).toBe(2);
      expect(arr.length).toBe(1);
    });
  });
});
