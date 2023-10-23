var a = 10;
var b = 50;
var addition = a + b;
var subtraction = a - b;
var multiplication = a * b;
var division = a / b;
var modulusAB = a % b; // a % b
var modulusBA = b % a; // b % a

// Get a reference to the textarea by its ID
var textarea = document.getElementById("simpleEx");

// Set the value of the textarea to display all the results and operations
textarea.value =
  "Addition: a + b = " +
  addition +
  "\n" +
  "Syntax: answer = a + b\n\n" +
  "Subtraction: a - b = " +
  subtraction +
  "\n" +
  "Syntax: answer = a - b\n\n" +
  "Multiplication: a * b = " +
  multiplication +
  "\n" +
  "Syntax: answer = a * b\n\n" +
  "Division: a / b = " +
  division +
  "\n" +
  "Syntax: answer = a / b";
// Get a reference to the "modulus" textarea by its ID
var modulusTextarea = document.getElementById("modulus");

// Set the value of the "modulus" textarea to display the modulus result and its syntax
modulusTextarea.value =
  "Modulus (a % b): " +
  modulusAB +
  "\n" +
  "Explanation: 50 divides 10 zero times, and the remainder is the entirety of 10.\n" +
  "Syntax: answer = a % b\n\n" +
  "Modulus (b % a): " +
  modulusBA +
  "\n" +
  "Explanation: 10 goes into 50 five times with no remainder.\n" +
  "Syntax: answer = b % a";

var isEqualLoose = a == b; // Loose equality (==)
var isNotEqualLoose = a != b; // Loose inequality (!=)
var isEqualStrict = a === b; // Strict equality (===)
var isNotEqualStrict = a !== b; // Strict inequality (!==)

// Get a reference to the "comparison" textarea by its ID
var comparisonTextarea = document.getElementById("basicComparison");

// Set the value of the "comparison" textarea to display the results and explanations
comparisonTextarea.value =
  "Loose Equality (a == b): " +
  isEqualLoose +
  "\n" +
  "Explanation: Returns true if a is equal to b, regardless of data type.\n" +
  "Example: " +
  a +
  " == " +
  b +
  " is " +
  isEqualLoose +
  "\n\n" +
  "Loose Inequality (a != b): " +
  isNotEqualLoose +
  "\n" +
  "Explanation: Returns true if a is not equal to b, regardless of data type.\n" +
  "Example: " +
  a +
  " != " +
  b +
  " is " +
  isNotEqualLoose +
  "\n\n" +
  "Strict Equality (a === b): " +
  isEqualStrict +
  "\n" +
  "Explanation: Returns true if a is equal to b, and they are of the same data type.\n" +
  "Example: " +
  a +
  " === " +
  b +
  " is " +
  isEqualStrict +
  "\n\n" +
  "Strict Inequality (a !== b): " +
  isNotEqualStrict +
  "\n" +
  "Explanation: Returns true if a is not equal to b or they are of different data types.\n" +
  "Example: " +
  a +
  " !== " +
  b +
  " is " +
  isNotEqualStrict;

var lessThan = a < b; // Less than (<)
var greaterThan = a > b; // Greater than (>)
var lessThanOrEqual = a <= b; // Less than or equal to (<=)
var greaterThanOrEqual = a >= b; // Greater than or equal to (>=)

// Get a reference to the "inequality" textarea by its ID
var inequalityTextarea = document.getElementById("inequalities");

// Set the value of the "inequality" textarea to display the results and explanations
inequalityTextarea.value =
  "Less Than (a < b): " +
  lessThan +
  "\n" +
  "Explanation: Returns true if a is less than b.\n" +
  "Example: " +
  a +
  " < " +
  b +
  " is " +
  lessThan +
  "\n\n" +
  "Greater Than (a > b): " +
  greaterThan +
  "\n" +
  "Explanation: Returns true if a is greater than b.\n" +
  "Example: " +
  a +
  " > " +
  b +
  " is " +
  greaterThan +
  "\n\n" +
  "Less Than or Equal To (a <= b): " +
  lessThanOrEqual +
  "\n" +
  "Explanation: Returns true if a is less than or equal to b.\n" +
  "Example: " +
  a +
  " <= " +
  b +
  " is " +
  lessThanOrEqual +
  "\n\n" +
  "Greater Than or Equal To (a >= b): " +
  greaterThanOrEqual +
  "\n" +
  "Explanation: Returns true if a is greater than or equal to b.\n" +
  "Example: " +
  a +
  " >= " +
  b +
  " is " +
  greaterThanOrEqual;
var a = true;
var b = false;

var andResult = a && b; // Logical AND (&&)
var orResult = a || b; // Logical OR (||)
var notA = !a; // Logical NOT (!a)

// Get a reference to the "logical" textarea by its ID
var logicalTextarea = document.getElementById("logicExpress");

// Set the value of the "logical" textarea to display the results and explanations
logicalTextarea.value =
  "Logical AND (a && b): " +
  andResult +
  "\n" +
  "Explanation: Returns true if both a and b are true.\n" +
  "Example: " +
  a +
  " && " +
  b +
  " is " +
  andResult +
  "\n\n" +
  "Logical OR (a || b): " +
  orResult +
  "\n" +
  "Explanation: Returns true if either a or b (or both) are true.\n" +
  "Example: " +
  a +
  " || " +
  b +
  " is " +
  orResult +
  "\n\n" +
  "Logical NOT (!a): " +
  notA +
  "\n" +
  "Explanation: Returns the opposite of the value of a.\n" +
  "Example: ! " +
  a +
  " is " +
  notA;
