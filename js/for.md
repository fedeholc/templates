Certainly. Here are examples of `for...in` and `for...of` loops in JavaScript:

1. `for...in` loop:

The `for...in` loop iterates over the enumerable properties of an object. It's best used with objects, not arrays.

```javascript
// Example 1: Iterating over object properties
const person = {
    name: 'Alice',
    age: 30,
    job: 'Engineer'
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}
// Output:
// name: Alice
// age: 30
// job: Engineer

// Example 2: Using for...in with an array (not recommended)
const fruits = ['apple', 'banana', 'orange'];

for (let index in fruits) {
    console.log(index + ': ' + fruits[index]);
}
// Output:
// 0: apple
// 1: banana
// 2: orange
```

2. `for...of` loop:

The `for...of` loop iterates over iterable objects (including Array, Map, Set, String, etc.), giving you direct access to the values.

```javascript
// Example 1: Iterating over an array
const colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(color);
}
// Output:
// red
// green
// blue

// Example 2: Iterating over a string
const str = 'Hello';

for (let char of str) {
    console.log(char);
}
// Output:
// H
// e
// l
// l
// o

// Example 3: Iterating over a Map
const fruits = new Map([
    ['apple', 5],
    ['banana', 3],
    ['orange', 2]
]);

for (let [fruit, quantity] of fruits) {
    console.log(fruit + ': ' + quantity);
}
// Output:
// apple: 5
// banana: 3
// orange: 2
```

Key differences:
- `for...in` is for iterating over object properties (keys).
- `for...of` is for iterating over iterable values.
- `for...in` can be used with objects that are not iterable.
- `for...of` is generally preferred for arrays and other iterable objects.
