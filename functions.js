// Functions is a reusable block f code that can be used multiple times within a code to perform some task

//Function in js are of two main types
// 1. in-built - In built functions are the functions that are already available in js library and use them in code
// 2. User-defined - User defined functions are the ones that user creates acc to the own requirement

//examples of in-built functions are prompt , number , console.log , etc.

// function addition(){
//     let num1= 100
//     let num2= 200
//     console.log(num1+num2)
// }
// addition()

// function addition(){
//     let num1 = Number(prompt("Enter a number"))
//     let num2 = Number(prompt("Enter a number"))
//     console.log(num1+num2)
// }
// addition()
// addition()
// addition()

// let correct_username = "admin"
// let correct_password = "admin123"

// function login(){
//     let input_username = prompt("Enter username")
//     let input_pass = prompt("ENter password")

//     if(input_username == correct_username){
//         if(input_pass == correct_password){
//             console.log("Login Successful")
//         }
//         else{
//             console.log("Incorrect password entered")
//         }
//     }
//     else{
//         console.log("Incorrect username entered")
//     }
// }
// login()



// function addition(){
//     let num1 = 100
//     let num2 = 200
//     console.log(num1+num2)
//     return num1
// }

// let num1 = addition()
// console.log(num1)

// return is a statement used inside a function that sends the value back to the place where function was called 
// the returned value can be stored in a variable and used in other expression
// How to use returned value? The value returned by a function can be stored in a variable,used in calculation and conditions.
// return immediately stops the execution of function.
// any statement written after return will not return
// A function can return any datatype number,string,boolean,array or object
// If a funciton does not return a value it returns undefined by default
// a function can have multiple return statements but only one is executed for a particular function called


// function user_marks(){
//     let marks1 = Number(prompt("Enter subject 1 marks out of 100"))
//     let marks2 = Number(prompt("Enter subject 2 marks out of 100"))
//     let marks3 = Number(prompt("Enter subject 3 marks out of 100"))
//     let marks4 = Number(prompt("Enter subject 4 marks out of 100"))
//     let marks5 = Number(prompt("Enter subject 5 marks out of 100"))

//     let total_marks = marks1 + marks2 + marks3 + marks4 + marks5
//     return total_marks
//     }

// let total_marks = user_marks()
// function calculatePercentage(){
//     let per = (total_marks / 500)*100
//     console.log("Student_percentage  :",per)
// }
// calculatePercentage()


// function calculate(){
//     let num1 = Number(prompt("Enter first number"))
//     let num2 = Number(prompt("Enter second number"))
//     let add = num1 + num2
//     console.log(`The addition of ${num1} and ${num2} is ${add}`)
//     return add
// }

// let add = calculate()

// function squareCube(){
//     let square = add**2
//     console.log(square)

//     let cube = add**3
//     console.log(cube)
// }
// squareCube()




// Parameters and Arguements - 
//Parameters are the variables used in the function definition to accept the values from the user. Parameters are used to make the functions more dynamuc and resuable.

//examoles :
// function addition(num1,num2){
//     let res = num1 + num2
//     console.log(`The additon of ${num1} and ${num2} is ${res}`)
//     return res
// }
// addition(100,200)
// addition(300,400)
// Here 100 and 200 are going to be assigned to num1 and num2 respectively. The values (100 and 200) that we passed to the function while calling it are called arguements.


// function welcomeMessage(name){
//     console.log("Hi" , name)
// }
// let username = prompt("Enter your name")

// welcomeMessage(username)


// function welcome(name,age){
//     console.log("hi, ", name)
//     console.log("Hi,", age)
// }
// let username = prompt("enter your name")
// let age = promt("enter your age")
// welcome(username,age)


// function calculation(num1,num2,opr){

//     switch(opr){
//         case "+":
//             console.log(`The addition of ${num1} and ${num2} is ${num1+num2}`)
//             break
//         case "-":
//             console.log(`The subtraction of ${num1} and ${num2} is ${num1-num2}`)
//             break
//         case "*":
//             console.log(`The multiplication of ${num1} and ${num2} is ${num1*num2}`)
//             break
//         case "/":
//                 console.log(`The division of ${num1} and ${num2} is ${num1/num2}`)
//             break
//         case "%":
//             console.log(`The modulus of ${num1} and ${num2} is ${num1%num2}`)
//             break
//         default: 
//             console.log("Invalid operator")
//         }
//         return opr  

// }

// let num1 = Number(prompt("Enter number 1"))
// let num2 = Number(prompt("Enter number 2"))
// let opr = (prompt("Enter a operator (+,-,*,/,%)"))
// calculation(num1,num2,opr)





// 1. function declaration - 
// function addition(num1,num2){
//     let res = num1 + num2
//     return res
// }

// addition(10,20)


// 2. function expression - 
// let addition = function(num1,num2){
//     let res = num1+num2
//     console.log("result :", res)
//     return res
// }
// addition(10,12)


// 3. arrow functions - Shorter way to write function in js. Introduced in ES6
// Arrow function is a no name function defined using arrow syntax. Generally used when the function is small and need to be used only once in a code.

// let addition = () =>{
//     console.log(`Addition of ${100} and ${200} is ${100+200}`)
// }
// addition()

// Hoisting - It is a concept in js where funciton declaration are moved to the top of their containing scope during the compilation phase. This means that you can call function before the are actually defined in the code

// function declared usind fucntion declaration are hoisted, meaning you can call them before their actual definition in te code. However, the functions defined using function expression (assigned to variables) are not hoisted in the same way, and you cannot call them before they are defined 


// let number = Number(prompt("Enter a number"))

// function minutes(number){
//    console.log(`${number} minutes is equal to ${number*60} seconds`)
// }
// minutes(number)


// minutes = function(number){
//       console.log(`${number} minutes is equal to ${number*60} seconds`)

// }
// minutes(number)


// minutes = (number)=>{

//       console.log(`${number} minutes is equal to ${number*60} seconds`)

// }
// minutes(number)



// Callback functions - A callback function is a function that is passed as an arguement to another function and is executed after some operation or event occurs. It allows you to define a function that will be called back at a later time, typically after an asynchronous operation completes.

// examples of in-built callback function : setTimeout, setInterval 

// function greet(){
//     console.log("Hello John")
// }

// greet('John')
// setTimeout(greet, 2000)


// function LoginCredentials(a){
//     setTimeout(()=>{
//         console.log("User information fetched")
//         a()
//     },2000)
// }

// function display(){
//     console.log("User information displayed")
// }

// LoginCredentials(display)


function takingOrder(){
    console.log("Order taken")
}

function preparingPizza(a){
    setTimeout(()=>{
        console.log("Pizza prepared")
        a()
    }, 3000)
}
function servingOrder(){
    setTimeout(()=>{
        console.log("Order Served")
    },1000)
}

takingOrder()
preparingPizza(servingOrder)
