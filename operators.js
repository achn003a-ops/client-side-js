// Operators are special symbols that are used to perform operations on two or more values and variables.

// The values or variable in which the operation is being performed is called operand,  and the symbol that specifies the operations is being called operator.

// Operattors are divided into numbers of categries based on what task do they perform.

// 1. Arithematic operators - Perform mathematical calculations and computations. + - * / % **
// let num1 = 10
// let num2 = 20

// console.log("Addition :", num1+num2)
// console.log("Subtraction :", num1-num2)
// console.log("Multiplication :", num1*num2)
// console.log("Division :", num1/num2)
// console.log("Modulus :", num1%num2)
// console.log("Exponent:", num1**num2)

// 2. Comparison Operator - Used to compare two values or variable. The result of comparison operator is always true or false.
// > < >= <= == === != !==
// console.log(10 == '10')
// console.log(10 === '10')
// console.log(10 != '20')
// console.log(10 !==10)

// 3. Assignmnet Operators - used to assign the values to variable
// a. Assignment(=)
// a = 80
// console.log(a)
// b. Addition Assignment (+=)
// a += 100
// console.log(a)
// the correspond to a = a+100
// c. subtraction Assignment
// a -= 100
// console.log(a)
// d. Multiplicaiton assignment
// a*= 2
// console.log(a)
// e. Division assignment
// a /= 10
// console.log(a)
// f. Modulus assignment
// a %= 7
// console.log(a)

// g. Exponent assignment
// a **= 2
// console.log(a)



// Incremnet and Decrement operator
// increment operatort(++) - used to increase the the value of variable by 1.
// let num = 200
// num++
// console.log(num)
// Decrement operator(--) decrease the value by one
// num--
// console.log(num)

// 4. logical Operators -
// a. and - returns true when all the conditions are true.
// let a = 0
// let b = 10
// console.log(a<b && a>0 && b<100)

// b. or - 
// console.log(a<0 || b<0 || b>0)

// c. not - 
// console.log(!true)


// let num_1 = 20
// let num_2 = 30



// console.log("The addition of",num_1, "and", num_2,"is",num_1+num_2)

// with template literal - 
// console.log(`Addition of ${num_1} and ${num_2} is ${num_1+num_2}`)


// console.log("The subtraction of",num_1, "and", num_2,"is",num_1-num_2)

// console.log("The divison of",num_1, "and", num_2,"is",num_1/num_2)
// console.log("The multiplication of",num_1, "and", num_2,"is",num_1*num_2)
// console.log("The exponent of",num_1, "and", num_2,"is",num_1**num_2)
// console.log("The modulus of",num_1, "and", num_2,"is",num_1%num_2)


// Taking user input - 
// num = prompt("Enter number")
// console.log(num)

// let num1 = prompt("Enter first numnbe :")
// let num2 = prompt("Enter second number : ")
// let sum = num1+num2

// console.log(`Addition of ${num1} and ${num2} is ${sum}`)


// TypeCasting - It is the process of converting the data type of the variables from one to another
// In Javascript typecasting of two types - 
// 1. Implicit Typecasting 
// 2. Explicit Typecasting

// 1. Implicit typecasting - Also known as type coersion, in this the datatype of the variable of value automatically converted by javascript on its own.
// Example: 
// let a = 100
// let b = "200"
// console.log(a+b)
// In this example the output will be 100200 as one value is string, the other value is automatically converted to string and then + operator performs string concatenation on those two values.
// console.log(a-b)
// In this output will be -100 as both the variable will be converted to integers and then the subtraction will be done.

// 2. explicit Typecasting - A programmer use some in-built functions to convert the data types of the values and variables manually. It is also known as type conversion.
// Converting to numbers - 
// A. Number() - Converts any value to number data types
// let n1 = "100"
// console.log(typeof(n1))
// n1 = Number(n1)
// console.log(n1)
// console.log(typeof(n1))

// B. parseInt()
// let n2 = "17j89"
// n2 = parseInt(n2)
// console.log(n2)
// console.log(typeof(n2))

// let n3 = "12.45"
// n3 = parseInt(n3)
// console.log(n3)
// console.log(typeof(n3))




// let num1 = prompt("Enter first numnbe :")
// let num2 = prompt("Enter second number : ")
// num1 = Number(num1)
// num2 = Number(num2)

// let sum = num1+num2
// let sub = num1-num2
// console.log(`Addition of ${num1} and ${num2} is ${sum}`)
// console.log(`subtraction of ${num1} and ${num2} is ${sub}`)



// C. String()
// let a = 100
// console.log(typeof(a))
// a = String(a)
// console.log(a)
// console.log(typeof(a))

// // D. Boolean()
// let b = 100
// let c = "hello"

// b = Boolean(b)
// console.log(b)

// c = Boolean(c)
// console.log(c)
// Every positive or negative integer when converted to boolean returns true but 0 is converted to false.
// Every non-empty string is converted to true and an empty string is false when converted to boolean.

// Truthy and Falsy Values
// Any value when converted to boolean returns false is called falsy values, and when true is called truthy value.

let num = 100
let msg = "hello"
let res = null
let a 
num = Boolean(num)
console.log(num)
msg  = Boolean(msg)
console.log(msg)
res = Boolean(res)
console.log(res)
a = Boolean(a)
console.log(a)

// Truthy Values - number, string
// Falsy values - 0, null, false, undefined, empty string