//what are arrays in javascript?
//An array is a data structure that can hold multiple values at once. It is a collection of elements that are stored in a single variable. 
//Arrays are defined using square brackets [] and can contain any type of data, including numbers, strings, objects, and even other arrays.
//technicall term of values in an array is called elements. Each element in an array has a specific index, which starts at 0 for the first
// //what are elements in an array? Elements are the individual values stored in an array. 
// The index of an element is its position in the array, starting at 0 for the first element, 1 for the second element, and so on.
//Examples of an array:
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];




//why are arrays important?
//Arrays are important because they allow us to store and manipulate collections of data in a structured way. 
//They provide a convenient way to group related data together and perform operations on that data, such as sorting, filtering, and iterating through the elements. 
//Arrays also allow us to easily access and modify individual elements using their index, which makes it easier to work with large datasets. 


//how are arrays executed in javascript?
//When an array is created, the JavaScript engine allocates memory for the array and initializes it with the specified elements. 
//The elements of the array can be accessed using their index, which starts at 0. 
//examples of how arrays are accessed using their index:
let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]); // Output: 10
console.log(numbers[2]); // Output: 30
console.log(numbers[4]); // Output: 50  
//When we perform operations on the array, such as adding or removing elements, the JavaScript engine updates the array accordingly and manages the memory allocation as needed. 
//Overall, arrays are executed in a way that allows us to efficiently store and manipulate collections of data in our JavaScript programs.
//arrays with objects
let students = [
  { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 19 }
];
//how are arrays with objects accessed?
//Arrays with objects can be accessed using their index, just like regular arrays.
//To access the properties of the objects within the array, we can use dot notation or bracket notation.
//examples of accessing properties of objects within an array:
console.log(students[0].name); // Output: "Alice"

//what is csv?
//CSV (Comma-Separated Values) is a simple file format used to store tabular data, such as a spreadsheet or database table. 
// Each line in a CSV file represents a row in the table, and the values in each row are separated by commas.