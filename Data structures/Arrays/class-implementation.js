/**
 * Class representing a custom array
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
   */
  push(item) {
    if (item === undefined) {
      throw new Error("The item can't be undefined");
    }

    this.data[this.length] = item;
    this.length++;
  }

  /**
   * Removes last element from the array, changes the length and returns the removed item
   * @returns {*} - The last item in the array
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
   * Removes the first element from the array and shifts all other elements down
   * @returns {*} - The first item in the arry
   */
  shift(){
    if (this.length === 0) {
      throw new Error("Array is empty.");
    }


    let firstItem = this.data[0]
    for(let i = 0; i < this.length -1; i++){
      this.data[i] = this.data[i+1]
    }

    delete this.data[this.length - 1]
    this.length--
    return firstItem
  }


  /**
   * Adds an item to the beginning of the array and shifts all other elements up
   * @param {*} item - The item to add 
   * @throws - Will throw an error if the item is undefined
   */
  unshift(item){
    if(item === undefined){
      throw new Error("The item can't be undefined.");
    }

    for(let i = this.length; i > 0; i--){
      this.data[i] = this.data[i -1]
    }

    this.data[0] = item 
    this.length++
  }
}

module.exports = TheArray;
