//what are loops in javascript?
//Loops are a fundamental programming concept that allows us to execute a block of code repeatedly based on a specified condition. to achieve a certain goal.
//In JavaScript, there are several types of loops, including for loops, while loops,do...while loops,repeat...until loops, and for...in loops.


//while...do loops
//A while loop is used to execute a block of code as long as a specified condition is true. The condition is evaluated before the execution of the loop body.
//Example of a while loop:
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

//do...while loops same as repeat...until loops
//A do...while loop is similar to a while loop, but the condition is evaluated after the execution of the loop body. 
// This means that the loop body will be executed at least once, even if the condition is false.
//Example of a do...while loop:
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 5);

//for loops
//A for loop is used to execute a block of code a specific number of times. It consists of three parts: the initialization, the condition, and the increment/decrement.
//Example of a for loop:
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//why are loops important?
//Loops are important because they allow us to automate repetitive tasks and perform operations on collections of data. 
//They help us to write more efficient and concise code by eliminating the need for manual repetition. 
//Loops also enable us to iterate through arrays, objects, and other data structures, making it easier to manipulate and process data. 


//how are loops executed in javascript?
//When a loop is executed, the JavaScript engine evaluates the loop's condition before each iteration. 
//If the condition is true, the loop body is executed, and then the loop's increment/decrement statement is executed (in the case of for loops). 
//This process continues until the condition evaluates to false, at which point the loop terminates and the engine moves on to the next line of code after the loop. 
//In the case of do...while loops, the loop body is executed at least once before the condition is evaluated, and then the process continues as described above.