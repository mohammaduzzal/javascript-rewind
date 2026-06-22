// && = and 
// || = or
// ! = not
//  ?? = nullish coalescing

// ?? = treats null nad undefined similarly

let user;

console.log(user ?? "Anonymous"); // Anonymous (user is undefined)


// The important difference between ?? & || is that:
// || returns the first truthy value.
// ?? returns the first defined value.

// || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result.