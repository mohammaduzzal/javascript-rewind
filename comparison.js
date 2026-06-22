// Comparison operators return a boolean value.
// Strings are compared letter-by-letter in the “dictionary” order.
// The values null and undefined are equal == to themselves and each other, but do not equal any other value.

console.log( null == undefined ); // true
console.log( null === undefined ); // false


// null
console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true

// undefined
console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)