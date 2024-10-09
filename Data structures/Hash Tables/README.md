# Hash Tables in JavaScript

This section focuses on the **Hash Tables** (also known as Hash Maps) data structure in JavaScript. **Hash Tables** offer an efficient way to store and retrieve data using key-value pairs.

## Table of Contents

- [Overview](#overview)
- [Common Operations](#data-structures-covered)
- [How Hash tables work](#How-hash-tables-work)
- [Techniques and Algorithms](#algorithms)
- [Folder structure](#folder-structure)
- [How to Run the Code](#how-to-use)
- [Resources](#resources)

## Overview

A **Hash Table** (also known as Hash Map) is a data structure that stores key-value pairs and provide fast access to values based on their keys. It uses a **hash function** to compute an index into an array of buckets or slots, from which the desired value can be found.

**Hash Tables** are used extensively in algorithms due to their efficiency in operations like lookups, insertions, and deletions.

### Key Characteristics of Hash Tables:

- **Key-value pairs:** Each entry in a hash table consists of a key and a value.

- **Hash function:** This function determines where to store the key-value pair in the table.

- **Efficient access:** On average, lookup, insert, and delete operations take constant time O(1).

- **Collision handling:** Collisions occur when different keys map to the same index. Common techniques include separate chaining and linear probing.

## Common Operations

Here are some common operations that can be performed on hash tables:

- **Insertion:** Insert a new key-value pair into the hash table.
- **Lookup:** Retrieve the value associated with a given key.
- **Deletion:** Remove a key-value pair from the hash table.
- **Update:** Change the value of an existing key.
- **Collision Handling:** Manage key collisions using techniques such as chaining or probing.

## How Hash tables work.

1. **Hash function:** When you add a key-value pair to a hash table, the key is passed through a hash function. This function converts the key into an index in the array.

2. **Storage:** This index is then used to store the data in the array.

3. **Retrieval:** When you want to retrieve a value, you pass its key through the same hash function to get the index, then look up the value at that index.

4. **Collision handling:** Sometimes, two different keys migh hash the same index. This is called a collision. Hash tables need a strategy to handle collisions, such as chaining (using linked lists at each index) or open addressing (finding the next empty slot).

## Techniques and Algorithms

### Techniques:

- **Hash Function:** A function that transforms the key into an array index. The quality of the hash function affects the efficiency of the hash table.
- **Collision Resolution:** Techniques like Separate Chaining and Linear Probing are used to resolve collisions.

### Algorithms:

- **Hash Set Implementation:** Create a basic hash table with insertion, deletion, and search functionalities.
- **Word Frequency Counter:** Use a hash table to count the occurrence of words in a text.
- **First Non-Repeating Character:** Find the first character in a string that does not repeat, using a hash table.

## Folder structure

```
hash-tables/
    ├──Tests/
    |   ├── class-implementation.test.js # Unit tests for the hash table implementation
    ├── class-implementation.js
    ├── hash-tables-basics.js
    ├── README.md
    |
```

## How to run code

1. Clone the repository

```sh
git clone https://github.com/yourusername/The-Data-structures-and-Algorithms-in-JavaScript.git
```

2. Navigate to the Hash Tables folder:

```sh
cd Hash Tables
```

3. Run any file

```sh
node class-implementation.js
```

4. Run tests (Optional, if using Jest)

```sh
npm run test
```

## Resources

Here are some helpful resources for learning more about **Hash tables**:

- [zerotomastery.io](https://zerotomastery.io/)
- [algoexpert.io](https://algoexpert.io/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [JavaScript.info](https://javascript.info/)
- Data Structures and Algorithms with JavaScript by Michael McMillan.

This README.md serves as a guide for understanding and navigating the hash-tables/ folder. It includes a brief overview of hash tables, key operations, techniques, and algorithms implemented within the folder.
