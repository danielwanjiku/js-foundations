// 1. function to calaculate area of rrectangle
function areaofrectangle(width, Length) {
  return width * length;
}

//2. function that converts temperatures from celcius to farenheit
//formula to convert celcius to farenheit (celcius*9/5)+32)
function celciustofarenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

//3. function that calculates factorial of a given number
function factorialofanumber(n) {
  return n * (n - 1) * (n - 2);
}

// 1.Create two number variables and calculate their sum, difference, product, and quotient. Display all results.
//the 2 number variables
const num1 = 20;
const num2 = 10;
//the arithmetic operations
const sum = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const quotient = num1 / num2;
//results
console.log(sum);
console.log(subtraction);
console.log(multiplication);
console.log(quotient);

//2.Find the remainder when 17 is divided by 5 and display the result.
const num1 = 17;
const num2 = 5;

//arithmetic operation
const remainder = num1 % num2;
//result
console.log(remainder);

//3.Create a variable x with a value of 10.
// Add 5 to it using a shorthand operator, then multiply the result by 2 using another shorthand operator. Display the final value.
let x = 10;
//arithmetic operations
// Add 5 to it using a shorthand operator
x += 5;
//multiply the result by 2 using another shorthand operator
x *= 2;
//result
console.log(x);

//(4)Perform the following operations and display the results:
const additionResult = "5" + 2;
const subtractionResult = "5" - 2;
//result

console.log(additionResult);
console.log(subtractionResult);

//5. conversion
//Convert a string "100" into a number and display the result.
let string = "100";
let num = Number(string);
console.log(num);
//convert a number 50 into a string and display the result.
let number = 50;
let str = String(number);
console.log(str);

//6.Compare the values
// loose equality
const value1 = 5;
const value2 = "5";

console.log(value1 == value2);
//strict equality.
const value3 = 5;
const value4 = "5";

console.log(value3 === value4);

//7. Create variables for principal, rate, and time. Calculate the simple interest and display the result.
let p = 10000;
let r = 5; //rate in  percentage
let t = 2; // time in years

let interest = (p * r * t) / 100;

console.log(interest);

//8. Create variables for a student's score and the pass mark. Determine if the student has passed and scored above 50.
let score = 60;
let passmark = 50;

let pass = [score >= passmark] && [score > 50];

console.log(score);
console.log(pass);

let salary = 65000;
let creditScore = 720;

//thresholds
const SALARY_THRESHOLD = 50000;
const CREDIT_SCORE_THRESHOLD = 700;

// 3. Determine if the loan is approved
if (salary >= SALARY_THRESHOLD && creditScore >= CREDIT_SCORE_THRESHOLD) {
  console.log("Loan Approved");
} else {
  console.log("Loan Denied");
}

//FUNCTIONS EXERCISES
//1.Mobile Airtime Purchase Validator
let phoneNumber = "0712345678";
let amount = 100;
let balance = 500;
let result = purchaseAirtime(phoneNumber, amount, balance);

function purchaseAirtime(phoneNumber, amount, balance) {
  // CHECK 1: Phone number must be exactly 10 digits (numbers only)
  if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
    return "Error: Phone number must be exactly 10 digits.";
  }

  // CHECK 2: Amount must be greater than zero
  if (amount <= 0) {
    return "Error: Amount must be greater than 0.";
  }

  // CHECK 3: User must have enough balance to cover the amount
  if (amount > balance) {
    return "Error: Insufficient balance. You have KES ${balance} but tried to buy KES ${amount}.`";
  }

  // ALL CHECKS PASSED — deduct the amount from the balance
  let newBalance = balance - amount;
  return `Success! KES ${amount} airtime purchased. New balance: KES ${newBalance}`;
}
console.log(result);

//2.Supermarket Discount Calculator
let Prices = [1500, 800, 1200, 600];

function calculateDiscount(prices) {
  // --- STEP 1: ADD UP ALL ITEM PRICES USING A LOOP ---
  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    total = total + prices[i]; // add each item price to total
  }

  console.log(`Items purchased  : ${prices.length}`);
  console.log(` Total before discount: KES ${total}`);

  // --- STEP 2: APPLY DISCOUNT BASED ON TOTAL ---
  let discountPercent = 0;
  let discountAmount = 0;
  let finalAmount = total;

  if (total > 5000) {
    discountPercent = 10; // 10% off
    discountAmount = (10 / 100) * total; // calculate 10% of total
    finalAmount = total - discountAmount; // subtract discount
  } else if (total > 2000) {
    discountPercent = 5; // 5% off
    discountAmount = (5 / 100) * total; // calculate 5% of total
    finalAmount = total - discountAmount; // subtract discount
  } else {
    console.log(" No discount applied (total is KES 2000 or below)");
  }

  if (discountPercent > 0) {
    console.log(`  Discount applied : ${discountPercent}%`);
    console.log(`You saved        : KES ${discountAmount}`);
  }

  console.log(` Final amount due  : KES ${finalAmount}`);

  return finalAmount;
}
console.log(calculateDiscount(Prices));

//3.PARKING FEE
let hour = 5;
let fee = calculateParkingFee(hour);
console.log(`Parking fee for ${hour} hours: ${fee}`);

function calculateParkingFee(hours) {
  if (hours <= 0) {
    return 0;
  } else if (hours <= 2) {
    return hours * 50;
  } else {
    return 2 * 50 + (hours - 2) * 30;
  }
}

//4.WATER BILL
let units = 25;
let billAmount = calculateWaterBill(units);
console.log(`The water bill for ${units} units is: ${billAmount}`);
function calculateWaterBill(units) {
  if (units <= 0) {
    return 0;
  } else if (units <= 10) {
    return units * 20;
  } else if (units <= 30) {
    return 10 * 20 + (units - 10) * 15;
  } else {
    return 10 * 20 + 20 * 15 + (units - 30) * 10;
  }
}

// Array of appliances
const appliances = [
  { name: "Air Conditioner", powerRating: 2000, hoursUsedPerDay: 8 },
  { name: "Refrigerator",    powerRating: 150,  hoursUsedPerDay: 24 },
  { name: "Washing Machine", powerRating: 500,  hoursUsedPerDay: 2 },
  { name: "Electric Heater", powerRating: 3000, hoursUsedPerDay: 5 },
];

// Step 1: Calculate total consumption
let totalConsumption = 0;

for (let i = 0; i < appliances.length; i++) {
  let energy = (appliances[i].powerRating * appliances[i].hoursUsedPerDay) / 1000;
  totalConsumption = totalConsumption + energy;
}

console.log("Total Daily Consumption: " + totalConsumption + " kWh");

// Step 2: Check if total is over 30 kWh
if (totalConsumption > 30) {
  console.log("Warning: High energy usage!");
  console.log("Appliances using more than 20% of total:");

  // Step 3: Find high consumption appliances
  for (let i = 0; i < appliances.length; i++) {
    let energy = (appliances[i].powerRating * appliances[i].hoursUsedPerDay) / 1000;
    let percentage = (energy / totalConsumption) * 100;

    if (percentage > 20) {
      console.log("- " + appliances[i].name + ": " + energy + " kWh (" + percentage.toFixed(1) + "%)");
      console.log("  Suggestion: Try reducing usage hours for " + appliances[i].name);
    }
  }

} else {
  console.log("Energy usage is fine!");
}


//3. E-commerce Cart with Inventory Management
let products = [
    { name: "Laptop", price: 5000, stock: 10 },
    { name: "Smartphone", price: 2000, stock: 20 },
    { name: "Tablet", price:3000, stock: 15 }
];
let cart = [
    { name: "Laptop", quantity: 1 }, 
    { name: "Tablet", quantity: 2 },
    { name: "Smartphone", quantity: 2 }
];
function calculateTotal(cart, products) {
    let total = 0;
    
//loop through each item in the cart
for (let i=0; i < cart.length; i++) {
    let cartItem = cart[i];

//find the corresponding product in the products array
for (let j=0; j < products.length; j++) {
    let product = products[j];

//if the product name matches the cart item name    
if (product.name === cartItem.name) {
    //check if the requested quantity is available in stock
    if (cartItem.quantity <= product.stock) {
        //calculate the total price for the cart item and add it to the total
        total += cartItem.quantity * product.price;
        //reduce the stock of the product by the quantity in the cart
        product.stock -= cartItem.quantity;
    } else {
        console.log(`Sorry, we only have ${product.stock} ${product.name}(s) in stock.`);
    }
    }
//DISCOUNT of 10% if order is greater than 10000
if (total > 10000) {
    total *= 0.9; // Apply a 10% discount
}
}
}return total;
}
let totalPrice = calculateTotal(cart, products);
console.log(`Total Price: $${totalPrice.toFixed(2)}`);
console.log("Updated Products:", products);
