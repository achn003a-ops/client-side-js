// console.log(document)

// console.log(document.body)
// console.lof(document.head)

//-----------------------------------------------------------------------------------------------------------

//Accessing elements - 

//1. getElementByTagName -
// let paragraph = document.getElementsByTagName("p")
// console.log(paragraph)

// 2. getElemetnByClassName - 
// let paragraph = document.getElementsByClassName("para")
// console.log(paragraph)

//3. getElementById - 
// let heading = document.getElementById("heading")
// console.log(heading)

// 4. queryselector - It selects first element
// let heading = document.querySelector("#heading")
// console.log(p)

// 5. queryselectorall - 
// let p = document.querySelectorAll("p")
// console.log(p)


//-----------------------------------------------------------------------------------------------------------

// let heading = document.getElementById("heading")
// console.log(heading)

// console.log(heading.textContent)
// console.log(heading.innerText)

// heading.innerText = "This is dynamically changes heading"


// function changeheading(){
//     heading.textContent = "This is dynamically changes heading"
// }

// heading.addEventListener("click",changeheading)


//-----------------------------------------------------------------------------------------------------------

// let button = document.getElementById("btn")
// button.textContent = "Logout"

// function changetext(){
//     button.textContent = "Logout"
// }

// button.addEventListener("click", changetext)

//-----------------------------------------------------------------------------------------------------------


// let num1 = document.getElementById("num1")
// let num2 = document.getElementById("num2")
// let result = document.getElementById("result")
// let submit = document.getElementById("submit_btn")

// function add(){
//     let value1 = Number(num1.value)
//     let value2 = Number(num2.value)
//     let res = value1 + value2
//     result.value = res

// }
// submit.addEventListener("click", add)

//-----------------------------------------------------------------------------------------------------------

let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let addition = document.getElementById("addition")
let subtraction = document.getElementById("subtraction")
let multiplication = document.getElementById("multiplication")
let division = document.getElementById("division")
let modulus = document.getElementById("modulus")
let result= document.getElementById("result")

addition.addEventListener("click", ()=>{
    result.value = Number(num1.value) + Number(num2.value)
})

subtraction.addEventListener("click", ()=>{
    result.value = Number(num1.value) - Number(num2.value)
})

multiplication.addEventListener("click", ()=>{
    result.value = Number(num1.value) * Number(num2.value)
})

division.addEventListener("click", ()=>{
    result.value = Number(num1.value) / Number(num2.value)
})

modulus.addEventListener("click", ()=>{
    result.value = Number(num1.value) % Number(num2.value)
})