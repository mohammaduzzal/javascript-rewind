// Array is a special kind of object, suited to storing and managing ordered data items.To store ordered collections we need array.

const numbers = [12, 22, 25, 26, 27, 28, 29, 30]

// console.log(numbers.length); //length uses for counting how many elements(data) have in a array.

// creating an empty array
let arr = new Array();
// console.log(arr);

let arr1 = [] //mostly used
// console.log(arr1);

// Array elements are numbered, starting with zero.
// We can get an element by its number in square brackets:
let fruits = ["Apple", "Orange", "Plum"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]); //undefined .if there is not a index its shows undefined.

// we can replaced the elements 

// fruits[1] = "Nuts"
// console.log(fruits);

// we can add the new elements

// fruits[3] = "Jackfruit"
// console.log(fruits);

// fruits[6] = "potato"
// console.log(fruits);

// get the last element of an array (two way)
// console.log(fruits[fruits.length - 1]);

// console.log(fruits.at(-1));

// pop and push methods

// push = adds an element to the end /Append the element to the end of the array
// pop = takes an element from the end/Extracts the last element of the array and returns it

// console.log(fruits.pop());
// console.log(fruits.pop());
// console.log(fruits.pop());
// console.log(fruits);


// console.log(fruits.push("potato"));
// console.log(fruits);

// The call fruits.push(...) is equal to fruits[fruits.length] = ....

// shift and unshift 
// shift = extract the first element and return it
// unshift = add the element to the beginning to the array

// console.log(fruits.shift());
// console.log(fruits);

// console.log(fruits.unshift("apple"));
// console.log(fruits);

// console.log(fruits.shift());

// console.log(fruits);


// includes

// console.log(fruits.includes("Plum")); //return true or false


// indexof = kono element er index number jante(jodi element na thake -1 debe)
// console.log(fruits.indexOf("Plum"));


// checking is array or not

// console.log(Array.isArray(fruits)); //return true or false



// array method---
// slice 
// arr.slice([start],[end])
// It returns a new array copying to it all items from index start to end (not including end)
// It’s similar to a string method str.slice, but instead of substrings, it makes subarrays.


// We can also call it without arguments: arr.slice() creates a copy of arr. That’s often used to obtain a copy for further transformations that should not affect the original array.
let arr3 = ["t", "e", "s", "t"];
// console.log(arr3.slice(0,2));



let arrr = ['Bilbo', 'Gandalf', 'Nazgul'];
console.log(arrr.join(";"));

// If you have a string and want to use join()

// First convert the string to an array with split()


const names = [
    "Bright",
    "Ayan",
    "Sakib",
    "Rahim",
    "Karim",
    "Nabila",
    "Farhan",
    "Mim",
    "Tanvir",
    "Nusrat"
];


for(const name of names){
    // console.log(name);
}

for(let i =0 ; i < names.length ; i++){
    // console.log(names[i]);
}

let i = 0;
while(i<names.length){
    // console.log(names[i]);
    i++
}

// reverse array
// const numbers1 = [5, 12, 8, 25, 17, 30, 9, 42, 15, 21];
// const revs = numbers1.reverse();
// console.log(revs);

const numbers1 = [5, 12, 8, 25, 17, 30, 9, 42, 15, 21];

let rev_arr = [];
// for(const num of numbers1){
//     rev_arr.unshift(num)
// }
// console.log(rev_arr);

// for(let i = 0; i<numbers1.length;i++){
//     const num = numbers1[i]
//     rev_arr.unshift(num)
// }
// console.log(rev_arr);


// reverse side looping
for(let i = numbers1.length -1; i>=0; i--){
    const num = numbers1[i]
    rev_arr.push(num)
}
// console.log(rev_arr);


// sort() -acc/dec
const numbers2 = [5, 12, 8, 25, 17, 30, 9, 42, 15, 21];

const acc_sort = numbers2.sort((a,b)=>a-b)
console.log(acc_sort);
const dec_sort = numbers2.sort((a,b)=>b-a)
console.log(dec_sort);

