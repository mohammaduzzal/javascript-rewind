// switch statement can replace multiple if checks.
// it gives more descriptive way to compare a value with multiple variants

// switch(x){
//     case "" :
//     ...
//     break
//     case "" :
//     ...
//     break
//     case "" :
//     ...
//     break

//     default :
//     ...
//     break
// }

let a = 2+2;

switch (a) {
    case 3:
        console.log("to small");
        break;
    case 1:
        console.log("exactly!");
        break;
    case 5:
        console.log("to big");
        break;

    default:
        console.log("i do not know man");
}