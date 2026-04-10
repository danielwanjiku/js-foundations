//what is a function in javascript?
//A function is basically a piece of code that can be reused without having to write it again and again.
//Functions are defined using the function keyword, followed by the name of the function, and then a set of parentheses that may contain parameters.
//  The  function body is enclosed in curly braces {}.

//Example of a function that adds two numbers:
function add(a, b) {
    return a + b;
}



//why are functions important?
//Functions are important because they allow us to break down complex problems into smaller, more manageable pieces. 
//They also help us to avoid code duplication and make our code more organized and easier to read. 
//Functions can be reused multiple times, which saves time and effort in writing code. 
//Additionally, functions can take parameters, which allows us to pass different values to the function and get different results. 
//Overall, functions are a fundamental building block of programming and are essential for writing efficient and maintainable code.
//change the top down approach to bottom up approach execution of code.



//how is a function executed in javascript?
//When a function is called, the JavaScript engine creates a new execution context for that function. 
//The execution context contains information about the function, such as its parameters and local variables.
//example of a function execution context:
function greet(name) {
    let greeting = "Hello, " + name + "!";
    return greeting;
}   
//When the function is called with an argument, the JavaScript engine evaluates the function body and executes the code within it.
//example of calling the greet function:
console.log(greet("Alice")); // Output: Hello, Alice!
