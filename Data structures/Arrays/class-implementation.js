/**
 * Class representing a custom array
 * @class
 */

class TheArray {
  /**
   * Creates an array
   * @type {Object} data - The data storage for the array.
   * @type {number} length - The length of the array.
   */
  constructor() {
    this.data = {};
    this.length = 0;
  }

  /**
   * Returns an item located at specific index
   * @param {*} index - The index of the item
   * @returns {*} item
   * @complexity O(1)T - Accessing an element by index in an object is a constant operation
   */
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error(`Index ${index} out of bounds.`);
    }
    return this.data[index];
  }

  /**
   * Appends an item to the end of the array
   * @param {*} item  - The item to add
   * @throws - Will throw an error if the item is undefined
   * @complexity O(1)T - Appending an element to the end of the array involves a simple assignment and incrementing the length, both of which are constant-time operation.
   */
  push(item) {
    if (item === undefined) {
      throw new Error("The item can't be undefined.");
    }

    this.data[this.length] = item;
    this.length++;
  }

  /**
   * Removes last element from the array, changes the length and returns the removed item
   * @returns {*} - The last item in the array
   * @complexity O(1)T - Removing the last element involves accessing the last index, deleting it, and decrementing the lenght, all of which are constant-time operations.
   */
  pop() {
    if (this.length === 0) {
      throw new Error("Array is empty.");
    }

    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  /**
   * Removes the first element from the array, shifts all other elements down and returns the removed item
   * @returns {*} - The first item in the arry
   * @complexity O(n)T - Removing the first element requires shifting all subsequent elements one position to the left, which takes linear time relative to the number of elements.
   */
  shift() {
    if (this.length === 0) {
      throw new Error("Array is empty.");
    }

    let firstItem = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  /**
   * Adds an item to the beginning of the array and shifts all other elements up
   * @param {*} item - The item to add
   * @throws - Will throw an error if the item is undefined
   * @complexity O(n)T - Inserting an element at the beginnng requires shifting all elements one position to the right, which takes linear time.
   */
  unshift(item) {
    if (item === undefined || item === null) {
      throw new Error("The item can't be undefined or null.");
    }

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = item;
    this.length++;
  }

  /**
   * Delete an item at specific index and shifts all other elements to the left
   * @param {*} index - The index of the item to delete
   * @throws {Error} If the index is out of bounds
   * @complexity O(n)T - Removing an item at specific index involves shifting all subsequent elements one place to the left, which takes linear time relative to the number of elements.
   *
   */
  deleteAtIndex(index) {
    if (index < 0 || index >= this.length) {
      throw new Error(`Index ${index} out of bounds.`);
    }

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }

  /**
   * Insert an item at specific index and shifts all other elements to the right
   * @param {*} index - The index at which to insert item
   * @param {*} item - The item to insert
   * @throws {Error} If the index is out of bounds
   * @complexity O(n)T -  Inserting an item at specific index involves shifting all subsequent elements to the right, which takes linear time relative to the number of elements.
   *
   */
  insertAtIndex(index, item) {
    if (item === undefined || item === null) {
      throw new Error("The item can't be undefined or null.");
    }
    
    if (index < 0 || index > this.length) {
      throw new Error(`Index ${index} out of bounds.`);
    }

    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[index] = item;
    this.length++;
  }

  
  /**
   * IndexOf: Return the first index of a specified item.
   * @param {*} item - Searching item's index
   * @returns {number} - Index of the item or -1 if not found
   * @throws Will throw an error if the item is null or undefined.
   * @complexity O(n)T - Its a linear time complexity since the worst case scenario involves running through the whole array before finding the item.
   */

  indexOf(item){
    if (item === null || item === undefined) {
      throw new Error("Item can't be null or undefined");
  }

    for (let i = 0; i < this.length; i++){
      if(this.data[i] === item){
        //Return index if found
        return i
      }
    }
    //Return -1 if not found
    return -1
  }
}

module.exports = TheArray;
