// ways to declare string
const country = "Bangladesh";
const village = 'Majdaskhina';
const thana = `tarash`;
const district = new String("Sirajgonj")

// console.log(country.length);
console.log(country[0]);

// here above you see we can use length,index test same as array.but in string we cannot change or add new thing.
// thats why string is immutable/unchangeable
// string = immutable/unchangeable
// array =mutable/changeable


console.log(country.toUpperCase());
console.log(country.toLowerCase());

const sq = ' ggg ';
console.log(sq.trim());

let nam = "boomDas";
// console.log(nam.slice(4));
// console.log(nam.slice(4,7));

// split and join
let names = 'Bilbo, Gandalf, Nazgul';

let ar = names.split(", ")
// console.log(ar);

let ab = "names";
console.log(ab.split("")); //[ 'n', 'a', 'm', 'e', 's' ]
console.log(ab.split(" ")); //[ 'names' ]
console.log(ab.split("m")); //[ 'na', 'es' ]

// concat
// The method arr.concat creates a new array that includes values from other arrays and additional items.
let f = "uzz";
let f1 = "al";
console.log(f + " " + f1);
console.log(f.concat(f1));

console.log(f.includes("z")); //return true or false


// To capitalize the first letter of every word in a string

const str = "The target attribute specifies where to open the linked document";

const result = str.split(' ')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                   .join(' ')
                  //  console.log(result);

    // const sentence = "The target attribute specifies where to open the linked document";
    // const vowels = "aeiouAEIOU";

    // for(const char of sentence){
    //   if(vowels.includes(char)){
    //     console.log(char);
    //   }
    // }

    // const sentence = "The target attribute specifies where to open the linked document";
    // const vowels = "aeiouAEIOU";
    // let countV = 0;
    // for(const char of sentence){
    //   if(vowels.includes(char)){
    //     countV++;
    //   }
    // }
    // console.log("total vowel :", countV);


       const sentence = "The target attribute specifies where to open the linked document";
    const vowels = "aeiouAEIOU";
    let countVArray = [];

    for(const char of sentence){
        if(vowels.includes(char)){
            countVArray.push(char)
        }
    }
   console.log(countVArray);