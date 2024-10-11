/**
 * Class - HashTable
 */

class HashTable {
  /**
   * Create a new array of specific size
   * @param {number} size - The size of the array
   */
  constructor(size) {
    this.data = new Array(size);
  }

  /**
   * Hash function to convert key to index
   * Using Horner's method (Data Structures and Algorithms with JavaScript by Michael McMillan.)
   * @param {string} key
   * @returns {number} - The index for the key
   */

  _hash(key) {
    let hash = 0;
    const H = 37;
    for (let i = 0; i < key.length; i++) {
      hash = H * hash + key.charCodeAt(i);
    }
    hash = hash % this.data.length;

    if (hash < 0) {
      hash += this.data.length - 1;
    }
    return parseInt(hash);
  }

  /**
   * Pushes the key-value pair to the array
   * @param {string} key
   * @param {*} value
   *
   * Time complexity
   * Average Case: (O(1)), assuming a good hash function and a low load factor.
   * Worst Case: (O(n)), where (n) is the number of elements in the slot due to collisions.
   */

  set(key, value) {
    const index = this._hash(key);
    const currentSlot = this.data[index];

    //If no slot exists at this index, create an empty array.
    if (!currentSlot) {
      this.data[index] = [];
      this.data[index].push([key, value]);
    } else {
      //slot exists, so we have to check if the key exists
      for (let i = 0; i < currentSlot.length; i++) {
        if (currentSlot[i][0] === key) {
          currentSlot[i][1] = value;
          return;
        }
      }
      //if the key doesn't exist
      currentSlot.push([key, value]);
    }
  }

  /**
   * Checks if the key exists
   * @param {string} key
   * @returns {boolean} - True if the key exists, otherwise false
   * Time complexity
   * Average Case: (O(1)), assuming a good hash function and a low load factor.
   * Worst Case: (O(n)), where (n) is the number of elements in the slot due to collisions.
   */

  hasKey(key) {
    const index = this._hash(key);
    const currentSlot = this.data[index];

    if (currentSlot) {
      for (let i = 0; i < currentSlot.length; i++) {
        if (currentSlot[i][0] === key) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Retrieves the value by key
   * @param {*} key
   * @returns {*} - The value associated with the key
   *
   * Time complexity
   * Average Case: (O(1)), assuming a good hash function and a low load factor.
   * Worst Case: (O(n)), where (n) is the number of elements in the slot due to collisions.
   */
  get(key) {
    const index = this._hash(key);
    const currentSlot = this.data[index];

    if (currentSlot) {
      for (let i = 0; i < currentSlot.length; i++) {
        if (currentSlot[i][0] === key) {
          return currentSlot[i][1];
        }
      }
    }
  }

  /**
   * Removes a key-value pair from the hash table
   * @param {string} key
   * @returns {boolean} - Returns true if the key was successfully removed, false otherwise
   * Time complexity
   * Average Case: (O(1)), assuming a good hash function and a low load factor.
   * Worst Case: (O(n)), where (n) is the number of elements in the slot due to collisions.
   */

  remove(key) {
    const index = this._hash(key);
    const currentSlot = this.data[index];

    if (currentSlot) {
      for (let i = 0; i < currentSlot.length; i++) {
        if (currentSlot[i][0] === key) {
          currentSlot.splice(i, 1);

          if (currentSlot.length === 0) {
            this.data[index] = undefined;
          }
          return true;
        }
      }
      return false;
    }
  }

  /**
   * Returns an iterable with all the keys
   * @returns []
   *
   * Time complexity
   * Average Case: (O(m + n)), where (m) is the number of slots in the data array and (n) is the average number of elements per slot.
   * Worst Case: (O(m * n)), where (m) is the number of slots and (n) is the number of elements in the slot due to collisions.
   */
  keys() {
    const keysArray = [];

    for (let i = 0; i < this.data.length; i++) {
      //if it's not an empty cell
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keysArray.push(this.data[i][j][0]);
        }
      }
    }

    return keysArray.length > 0 ? keysArray : [];
  }

  /**
   * Returns an array of all values in the hash table
   * @returns {Array} - The list of values
   *
   * Time complexity
   * Average Case: (O(m + n)), where (m) is the number of slots in the data array  and (n) is the average number of elements per slot.
   * Worst Case: (O(m * n)), where (m) is the number of slots and (n) is the number of elements in the slot due to collisions.
   */
  
  values() {
    const valuesArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          valuesArray.push(this.data[i][j][1]);
        }
      }
    }

    return valuesArray.length > 0 ? valuesArray : [];
  }

  /**
   * Returns an array of all entries in the hash table
   * @returns {Array} - The list of entries
   * Time complexity
   * Average Case: (O(m + n)), where (m) is the number of slots in the data array  and (n) is the average number of elements per slot.
   * Worst Case: (O(m * n)), where (m) is the number of slots and (n) is the number of elements in the slot due to collisions.
   */
  entries() {
    const entriesArray = [];
    let isEmpty = true;

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        isEmpty = false;
        for (let j = 0; j < this.data[i].length; j++) {
          entriesArray.push(this.data[i][j]);
        }
      }
    }

    return isEmpty ? undefined : entriesArray;
  }

  /**
   * Resets the hast table to an empty state.
   *
   * O(1)
   */
  clear() {
    this.data = new Array(this.data.length);
  }

  /**
   * Returns the total number of key-value pairs stored in the hash table.
   * @returns {number} - The count of key-value pairs
   *
   * Time complexity
   * Average Case: (O(m + n)), where (m) is the number of slots in the data array  and (n) is the average number of elements per slot.
   * Worst Case: (O(m * n)), where (m) is the number of slots and (n) is the number of elements in the slot due to collisions.
   */
  size() {
    let totalCount = 0;

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        totalCount += this.data[i].length;
      }
    }
    return totalCount;
  }
}

//module.exports = HashTable;

let first = new HashTable(10);

first.set("one", 10);
first.set("two", 20);
