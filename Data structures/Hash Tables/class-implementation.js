/**
 * Class - HashTable
 */

class HashTable {
  /**
   * Creae a new array of specific size
   * @param {number} size - The size of the array
   */
  constructor(size) {
    this.data = new Array(size);
  }

  /**
   * Simple hash function to convert key to index
   * @param {string} key
   * @returns {number} - The index for the key
   */

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
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
          currentSlot[i][i] = value;
          return;
        }
      }
      //if the key doesn't exist
      currentSlot.push([key, value]);
    }
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
          return true;
        }
      }
    }

    return false;
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
    if (!this.data.length) {
      return undefined;
    }

    const keysArray = [];

    for (let i = 0; i < this.data.length; i++) {
      //if it's not an empty memory cell
      if (this.data[i]) {
        //also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0]);
          }
        } else {
          keysArray.push(this.data[i][0]);
        }
      }
    }

    return keysArray
  }
}

module.exports = HashTable;
