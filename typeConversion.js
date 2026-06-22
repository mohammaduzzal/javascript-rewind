let lue = null;

console.log(typeof(lue));
lue = String(lue)  //null become 0
console.log(typeof(lue));



// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.Other values become true.
console.log(Boolean(1));
console.log(Boolean("0"));
console.log(Boolean("hello"));

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));