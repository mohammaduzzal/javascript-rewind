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
console.log(isLeapYearNow);
