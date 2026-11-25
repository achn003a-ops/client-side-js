let student_name = prompt("Enter Student Name")
let age =  Number(prompt("Enter Student age"))
let eng_marks = Number(prompt("Enter english marks"))
let sci_marks =  Number(prompt("Enter science marks"))
let math_marks =  Number(rprompt("Enter mathematics marks"))
let eco_marks =  Number(prompt("Enter economics marks"))

let total = eng_marks+sci_marks+math_marks+eco_marks
console.log(total)

console.log("Student Name :",student_name)
console.log("Student Age :", age)
console.log("Total Marks : ",total)
console.log("Average Marks : ",total/4)
console.log("Percentage :",total/4*100)
