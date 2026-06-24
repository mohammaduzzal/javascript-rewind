// what is loop ?
//we often need to repeat actions. loops are the way to repeat the same code multiple times


// while loop syntax 

// while(condition){
//     // if the condition is true the code from loop body is executed
// }

let i = 0;

while(i<3){
   i++;
//    console.log(i);
}

// A single execution of the loop body is called an iteration. here we see 3 times iterations

let a = 3;

while (a) { // a shorter way to write while (i != 0) is while (i)
    a--;
    // console.log(a);
}


// do-while loop syntax
// do {
    
// } while (condition);

// This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.


let b = 4;

do{
    b++;
    // console.log(b);
}while(b < 10)


    // for loop syntax

    // for(begin ; condition ; step){
    //     // loop body
    // }

    for(let i = 0 ; i < 15 ; i++){
        // console.log(i);
    }


    // Instead of defining a variable, we could use an existing one:
    let h = 0;
    for(h=0 ; h<20 ; h++){
        // console.log(h);
    }

    // Any part of for can be skipped.
    let d = 0;
    for (; d <25; d++) {
        // console.log(d);
        
    }


    // break

    for(let h = 1 ; h < 12 ; h++){
        if(h == 9){
            break;
        }
        //  console.log(h);
    }

    // continue
    for (let f = 0; f < 15; f++) {
        if(f % 2 == 0){
            continue;
        }
        // console.log(f); 
        
    }

    let num = 1;
    let sum = 0;
    while (num <= 10) {
        sum = sum + num;
        // console.log("sum :", sum);
        num ++;
        // console.log(num);
    }


    // even

        for(let i = 0 ; i <=20; i=i+2){
            console.log(i);
        }

        // odd

          for(let i = 1 ; i <=20; i=i+2){
            // console.log("odd : ", i);
        }

        for (let i = 10 ; i >= 0 ; i--){
            console.log(i);
        }

