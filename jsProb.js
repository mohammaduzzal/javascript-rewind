// inch to feet
// 12 inches = 1 feet

function inchesToFeet(inches){
    const feet = inches / 12;
    const feetNumber = parseInt(feet);
    const inchesRemaining = inches % 12 ;
    const result = feetNumber + " feet " + inchesRemaining + " inches "
    return result;
}

const brightHeight = inchesToFeet(70)
// console.log(brightHeight);

// mile to km(1 mile = 1.60934 km)

function mileToKm(mile){
    const km = mile * 1.60934;
    return km
}

const result = mileToKm(3);
// console.log(result);

function kmToMile(km){
    const mileR = km * 0.621371
    return mileR
}
const mile = kmToMile(5)
// console.log(mile);

// -----------------
// is it leap year or not 
function isLeapYear(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true
    }
    else if( year % 400 === 0){
        return true
    }else{
        return false
    }
}

const isLeapYearNow = isLeapYear(2100)
// console.log(isLeapYearNow);

// ---------------------------
function oddNumAvg(numbers){
    const oddArray = []
    for(const number of numbers){
        if(number % 2 !== 0){
            oddArray.push(number)
        }
    }

    let sum = 0;
    for(const number of oddArray){
        sum =  sum + number 
    }
    const count = oddArray.length
    const avg = (sum / count).toFixed(2)

    return avg

}

const numbers = [5, 12, 8, 23, 17, 42, 9, 31, 15, 27];
const AvgOdd=oddNumAvg(numbers)
// console.log(AvgOdd);

// ------------------
// function removeDuplicateName(duplicateName){ //modern js
//     const removeDup = [...new Set(duplicateName)]
//     return removeDup
// }
function removeDuplicateName(duplicateName){ //doing manually
    const singleArray = [];
    for(const name of duplicateName){
        if(singleArray.includes(name) === false){
            singleArray.push(name)
        }
    }
    return singleArray
}



const employees = [
  "Rahim",
  "Karim",
  "Sakib",
  "Rahim",
  "Nusrat",
  "Karim",
  "Tania",
  "Sakib",
  "Farhan",
  "Tania",
  "Farhan",
  "Nusrat"
];

const removeEmployeeDup = removeDuplicateName(employees)
// console.log(removeEmployeeDup);

// --------------------------------
const numberss = [5, 12, 8, 23, 17, 42, 9, 31, 15, 27];
// const mathMax = Math.max(...numberss)
// const mathMin = Math.min(...numberss)
const mathMax = Math.max.apply(null,numberss)
const mathMin = Math.min.apply(null,numberss)

// const mathMax = Math.max(21,0,3)
// const mathMin = Math.min(21,0,3)
// console.log(mathMax);
// console.log(mathMin);

const lottery = Math.round(Math.random()*10)
// console.log(lottery);

// ---------------------
let a = 5;
let b = 7;
console.log(a,b);

const temp = a;
a=b;
b=temp;
console.log(a,b);
// swapping with the help of destructure
let x =5;
let y =7;
console.log(x,y);
[x,y] = [y,x];
// console.log(x,y);
