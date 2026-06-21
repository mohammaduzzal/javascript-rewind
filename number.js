const add = 20;
const add1 = "20";
console.log(add + parseInt(add1));

// parseInt = convert string into a number

const add2 = "20";
const add3 = 20;
console.log(add2 + add3);


console.log(parseInt("5fs5")); //5
console.log(parseInt("eifhdhfdjkfhjshgfueg")); //5


const floatAdd = 21.5;
const floatAdd1 = "21.8";

console.log(floatAdd + parseFloat(floatAdd1));

const diff = 0.1;
const diff1 = 0.2;
console.log(typeof(diff + diff1)); //number  //0.30000000000000004 =different
console.log(typeof((diff + diff1).toFixed(1))); //string //toFixed use means result types will be "string"


        const inf = 50 / 0;
        console.log(inf); //Infinity



        const inf1 = -50 / 0;
        console.log(inf1); //-Infinity


        
        const a = isNaN("11") //false
        const a1 = isNaN(2-10) //false
        const a2 = isNaN(true) //false
        const a3 = isNaN(0) //false
        console.log(a);
        console.log(a1);
        console.log(a2);
        console.log(a3);


// What is isNaN()?
// isNaN() means:
// "Is this value Not a Number?"
// If the value is not a number, it returns true.
// If the value can be treated as a number, it returns false.

// Easy Trick to Remember
// Think of isNaN() as asking:
// "Can JavaScript turn this into a number?"

        