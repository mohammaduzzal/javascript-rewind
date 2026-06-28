function getMax(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        return ("the boss is :-", num1);
    }
    else if(num2 > num1 && num2 > num3){
        return ("the boss is :-", num2);
    }else{
        return ("the boss is :-", num3);
    }
}

const getMaxFromThree = getMax(119,210,100)
// console.log(getMaxFromThree);

// --------------------
// get max from an array 

const numbers = [5, 12, 8, 23, 17, 42, 9, 31, 15, 27];

function getMaxFromArray(numbers){
    let max = numbers[0]

    for(const num of numbers){
        if(num > max){
            max = num
        }
    }
    return max

}
// function getMaxFromArray(numbers){
//     const max = Math.max(...numbers)
//     return max

// }

const getMaxNumFromArray = getMaxFromArray(numbers)
// console.log("the max num from array is :", getMaxNumFromArray);

const marks = [5, 12, 8, 23, 17, 42, 9, 31, 15, 27];

function getMinMark(marks){
    let min = marks[0]
    for(const mark of marks){
        if(mark < min){
            min = mark
        }
    }
    return min
}

// function getMinMark(numbers){
//     const min = Math.min(...marks)
//     return min

// }

const getMinFromArray = getMinMark(marks)
// console.log("the min mark from array is :-", getMinFromArray);

// -------------------------

const mobiles = [
  {
    name: "Samsung Galaxy S24",
    price: 899,
    camera: "50MP",
    year: 2024,
  },
  {
    name: "iPhone 15",
    price: 999,
    camera: "48MP",
    year: 2023,
  },
  {
    name: "Google Pixel 8",
    price: 699,
    camera: "50MP",
    year: 2023,
  },
  {
    name: "OnePlus 12",
    price: 799,
    camera: "50MP",
    year: 2024,
  },
  {
    name: "Xiaomi 14",
    price: 749,
    camera: "50MP",
    year: 2024,
  },
  {
    name: "Nothing Phone (2)",
    price: 599,
    camera: "50MP",
    year: 2023,
  },
  {
    name: "Motorola Edge 50",
    price: 549,
    camera: "50MP",
    year: 2024,
  },
  {
    name: "Realme GT 6",
    price: 499,
    camera: "50MP",
    year: 2024,
  },
  {
    name: "Oppo Reno 12",
    price: 459,
    camera: "50MP",
    year: 2024,
  },
  {
    name: "Vivo V30",
    price: 429,
    camera: "50MP",
    year: 2024,
  },
];

function getCheapestPhone(mobiles){

    let cheapPrice = mobiles[0]

    for(const mobile of mobiles){
        if(mobile.price < cheapPrice.price){
            cheapPrice = mobile
        }
    }

    return cheapPrice

}

const getCheapMobile = getCheapestPhone(mobiles)
// console.log(getCheapMobile);

const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 50 },
  { name: "Monitor", price: 300 },
  { name: "Headphones", price: 120 }
];

function totalPrice(products){
  let total = 0
  for(const product of products){
    total = total + product.price
  }
  return total
}

const totalTaka = totalPrice(products)
// console.log(totalTaka);


const products1 = [
  { name: "Laptop", price: 850, quantity: 5 },
  { name: "Mouse", price: 25, quantity: 20 },
  { name: "Keyboard", price: 60, quantity: 12 },
  { name: "Monitor", price: 300, quantity: 8 },
  { name: "Headphones", price: 120, quantity: 15 }
];

function totalPriceWithQuantity(products1){
  let total = 0
  for(const product of products1){
    const thisProductTotal = product.price * product.quantity
    total = total + thisProductTotal
  }
  return  total
}

const totalTakaWithQuan = totalPriceWithQuantity(products1)
// console.log(totalTakaWithQuan);

function discountedPrice(quantity){
  if(quantity <=100){
    const total = quantity * 100
    return total
  }
  else if(quantity <=200){
    const total = quantity * 90
    return total
  }
  else{
    const total = quantity * 70
    return total
  }
}

const totalDiscount = discountedPrice(201)
// console.log(totalDiscount);


function layeredDiscount(quantity){
  const first100Price = 100;
  const second100Price = 90;
  const above200Price = 70;

  if(quantity <=100){
    const total = quantity * first100Price;
    return total
  }
  else if(quantity <=200){
    const first100Total =100 * first100Price;
    const remainingQuantity = quantity - 100;
    const remainingTotal =remainingQuantity * second100Price;  
    const total = first100Price + remainingTotal;
    return total
  }
  else{
    const first100Total = 100 * first100Price;
    const second100Total = 100 * second100Price;
    const remainingQuantity = quantity - 200;
    const remainingTotal = remainingQuantity * above200Price
    const total = first100Total + second100Total + remainingTotal
    return total
  }
}

const layerDis = layeredDiscount(250)
console.log(layerDis);

  