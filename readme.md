# JavaScript ES6 Questions and Answers

### 1) What is the difference between var, let, and const?

- **var** → Old way to declare variables. Function-scoped and can be redeclared.
- **let** → Block-scoped, cannot be redeclared in the same block. Value can be updated.
- **const** → Block-scoped, value cannot be reassigned (constant).

---

### 2) What is the difference between map(), forEach(), and filter()?

- **map()** → Creates a new array by transforming each element.
- **forEach()** → Runs a function on each element but does not return a new array.
- **filter()** → Creates a new array with elements that pass a condition.

---

### 3) What are arrow functions in ES6?

- Arrow functions are a shorter way to write functions using `=>`.
- Example:
  ```js
  const add = (a, b) => a + b;
  ```

---

### 4) How does destructuring assignment work in ES6?

- Destructuring allows us to unpack values from arrays or objects into variables.
- Example:

```js
const [a, b] = [10, 20]; // Array destructuring
const { name, age } = { name: 'Nazmul', age: 22 }; // Object destructuring
```

---

### 5) Explain template literals in ES6. How are they different from string concatenation?

- Template literals use backticks (`) instead of quotes.
- They allow embedding variables and multi-line strings easily.
- Example:

```js
const name = 'Nazmul';
console.log(`Hello, ${name}!`);
```
