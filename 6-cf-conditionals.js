//what are conditionals in javascript?
//conditionals are tools that allow us to make decisions in our code based on certain conditions.
//they are used to execute different blocks of code based on whether a condition is true or false.
//examples of conditionals in javascript include if statements, else statements, and switch statements.

//if statements
//an if statement is used to execute a block of code if a specified condition is true.otherwise, the block of code will be skipped.
//example of an if statement:
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}

//if else statements
//an if else statement is used to execute one block of code if a specified condition is true, and another block of code if the condition is false.
let grade = 85;
if (grade >= 60) {
    console.log("You passed the exam.");
} else {
    console.log("You failed the exam.");
}

//switch statements
//a switch statement is used to perform different actions based on different conditions. it is often used as an alternative to multiple if else statements.
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    default:
        console.log("Invalid day.");
}

//why are conditionals important?
//conditionals are important because they allow us to control the flow of our code and make decisions based on certain conditions. 
//they help us to create dynamic and interactive applications that can respond to user input and changing data. 
//without conditionals, our code would be static and unable to adapt to different situations. 
//conditionals also help us to write more efficient code by allowing us to avoid unnecessary computations and execute only the relevant code based on the conditions. 


//how are conditionals executed in javascript?
//when a conditional statement is executed, the JavaScript engine evaluates the condition and determines whether it is true or false. 
//if the condition is true, the block of code associated with that condition is executed.
//if the condition is false, the block of code associated with that condition is skipped, and the engine moves on to the next condition (if there are multiple conditions) or the next line of code (if there are no more conditions).