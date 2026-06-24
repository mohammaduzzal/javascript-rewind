const words = "i want to be a software engineer";

// way 1 to reverse 

let reverse = "";
for(const letter of words){
    reverse = letter + reverse
    // console.log(letter);
}
// console.log(reverse);

// way 2

const reality = "my cv is not ready";
let rev = "";
for(let i = 0 ; i < reality.length ; i++){
    // console.log(i);
    // console.log(reality[i]);
    const letters = reality[i];
    rev = letters + rev;

}
// console.log(rev);

// way 3
const dres = "plums are heavy vomit already";

const revs = dres.split("").reverse().join("");
console.log(revs);

let arr4 = [1, 2, 3, 4, 5];
console.log(arr4.reverse());