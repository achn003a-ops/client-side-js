// conditional statements - Also known as decision making statements.

// 1. if st - 

//syntax - 
// if(condition){
//     statements
// }


// num1 = 89
// num2 = 90

// if(typeof(num1) == "number" && typeof(num2) == "number")
// {
//     console.log(`Addtion of ${num1} and ${num2} is ${num1+num2}`)
// }

// num = 10
// num1 = 10001
// if (num1 > 100){
//     console.log(num1)
// }

// let username = "JOHN"
// let membership = false
// if (membership == true){
//     console.log("10% discount available")
// }

// let logged_in = true

// if (logged_in == true){
//     console.log("Welcome user")
// }


//  input the total cart amount
// if cart amount is more than 1000, display free delivery available

// let cart_amt = Number(prompt("Enter the total cart amount :"))
// if (cart_amt > 1000){
//     console.log("Free delivery available")
// }

// 2. if-else st. - If else statement are used to execute a block of code if condition is true and another block if condition is false.
// let x = 200
// if (x > 100){
//     console.log("Number is greater than 100")
// }
// else{
//     console.log("Number is less than 100")
// }



// let total_bill = 3500

// if (total_bill > 4999){
//     console.log("20% off")
// }
// else{
//     console.log("5% off")
// }



// logged_in = false
// if (logged_in == true){
//     console.log("welcome, user")
// }
// else{
//     console.log("welcome, guest")
// }




// let user = Number(prompt("Enter a number"))
// if (user >= 0){
//     console.log("It is a positive number")
// }
// else{
//     console.log("It is a negative number")
// }



// let user = Number(prompt("Enter a number"))
// if (user %2 == 0){
//     console.log("even number")
// }
// else{
//     console.log("odd number")
// }


// let user1 = Number(prompt("Enter first number"))
// let user2 = Number(prompt("Enter second number"))

// if (user1 > user2){
//     console.log("USer one is greater")
// }
// else{
//     console.log("user 2 is greater")
// }



// 3. if-elseif ladder - 

// let cart_amount = 2400

// if (cart_amount > 2000){
//     console.log("20% discount")
// }
// else if(cart_amount > 1500){
//     console.log("15% discount")
// }
// else if(cart_amount > 1000){
//     console.log("10% discount")
// }
// else{
//     console.log("5% discount")
// }



// let student_per = 83

// if (student_per > 91){
//     console.log("Grade A")
// }
// else if (student_per > 81){
//     console.log("Grade B")
// }
// else if (student_per > 71){
//     console.log("Grade C")
// }
// else if (student_per > 61){
//     console.log("Grade D")
// }
// else if (student_per > 51){
//     console.log("Grade E")
// }
// else{
//     console.log("Fail")
// }


// login validation - Set correct username = "Admin"
// & correct -password = "Admin123"
// ask user to input username and password. If both are correct display login successfull, otherwise invalid username or password


// check age for variable acces
// ask user to provide age if age is 18 or more display you can access variable else display access denied


// let correct_username = "Admin"
// let correct_password = "admin123"

// let user_name = prompt("Enter username")
// let password = prompt("Enter password")

// if (correct_username == user_name && correct_password == password){
//     console.log("Login Successfull")
// }
// else{
//     console.log("Invalid username or password")
// }




// let user_age = Number(prompt("Enter your age"))

// if (user_age >= 18){
//     console.log("You can access the variable")
// }
// else{
//     console.log("Access Denied")
// }





// let hours = 13

// if (hours < 12){
//     console.log("Good Morning")
// }

// else if (hours < 18){
//     console.log("Good Afternoon")
// }
// else if (hours < 24){
//     console.log("Good evening")
// }

// else{
//     console.log("Invalid time / hour value")
// }


// let temp = 30

// if (temp >= 40){
//     console.log("Very Hot")
// }
// else if (temp >= 30){
//     console.log("Hot")
// }
// else if (temp >= 20){
//     console.log("Pleasant weather")
// }
// else{
//     console.log("Cold")
// }


// 4. Nested if-else statement -

// let correct_pin = 4567
// let amt_bal = 8900

// let input_pin = Number(prompt("Enter atm pin"))

// if (input_pin === correct_pin){
//     let amount = Number(prompt("Enter Amount to Withdraw"))
//     if (amount <= amt_bal){
//         console.log("Transaction Successfull")
//         console.log("Available Balance :", amt_bal - amount)
//     }
//     else{
//         console.log("isufficient Balance")
//     }

// }
// else{
//     console.log("Incorrect Pin Entered")
// }


// let isLoggedin = true
// let isAdmin = false

// if (isLoggedin){
//     if (isAdmin){
//         console.log("Admin Panel Accessed")
//     }
//     else{
//         console.log("User Panel Accessed")
//     }
// }
// else{
//     console.log("login to continue")
// }



// 5. ternary Operator - 

// let logged_in = true
// logged_in ? console.log("welcome, user") : console.log("Welcome Guest")


// 1. Take age and has vote id. If age is 18 or above, check whether the person has a votedid . Panel appropriate messages.

// 2. Take username and password. Firse check whether username is correct. If it is correct cheack the passwrd : 
// print - Login successfull, Invalid usrname, wrong password 

// let age = Number(prompt("Enter your age"))
// let voteid = Number(prompt("User has voter id (true/false)"))
// if (age >= 18){
//     if (voteid == true){
//         console.log("you are eligilible to vote")
//     }
//     else{
//         console.log("Please! create you voter id")
//     }
// }
// else{
//     console.log("Not eligilible to vote")
// }


// let correct_username = "admin"
// let correct_pass = "admin123"

// let username = prompt("Enter your username")
// if (correct_username == username){
//     let pass = prompt("Enter your password")
//     if (correct_pass == pass){
//         console.log("Login successful")
//     }
//     console.log("Wrong password")
// }
// else{
//     console.log("Invalid username")
// }




// 6. Switch Statement -  

// let day = 1 

// switch(day){
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//      case 4:
//          console.log("Thursday")
//          break;
//     case 5:
//         console.log("friday")
//         break;
//     case 6:
//         console.log("Saturday")
//         break;
//     case 7:
//         console.log("Sunday")
//         break;
//         default:
//         console.log("Invalid Day Number")
// }



// let traffic_signal = prompt("enter color")

// switch(traffic_signal){
//     case "red":
//         console.log("STOP")
//         break;
//     case "yellow":
//         console.log("WAIT")
//         break;
//     case "green":
//         console.log("Go")
//         break;
//     default:
//         console.log("Invalid color")
// }


// let user1 = Number(prompt("Enter first number"))
// let user2 = Number(prompt("Enter second number"))

// let operator = prompt("Enter a operator (+,-,*,/)")

// switch(operator){
//     case "+":
//         console.log(`Addition of ${user1} and ${user2} is ${user1 + user2}`)
//         break
//     case "-":
//         console.log(`Subtraction of ${user1} and ${user2} is ${user1 - user2}`)
//         break
//     case "*":
//         console.log(`Multiplication of ${user1} and ${user2} is ${user1 * user2}`)
//         break
//     case "/":
//         console.log(`Division of ${user1} and ${user2} is ${user1 / user2}`)
//         break
//     default:
//         console.log("Invalid operatorr") 
// }






// let login_role = prompt("Enter your role")

// switch(login_role){
//     case "Admin":
//         console.log("Welcome", login_role)
//         break
//     case "Student":
//         console.log("Welcome", login_role)
//         break
//     case "Teacher":
//         console.log("Welcome", login_role)
//         break
//     default:
//         console.log("Invalid role")
// }






// let grade = "A"

// switch(grade){
//     case "A":
//         console.log("Excellent")
//         break
//      case "B":
//         console.log("Very Good")
//         break
//      case "C":
//         console.log("Good")
//         break
//      case "D":
//         console.log("Average")
//         break
//      case "E":
//         console.log("Fail")
//         break
//     default:
//         console.log("Invalid Grade")
// }


let cart_amount = 890

if (cart_amount == 0){
    console.log("Cart is empty")
}
else if (cart_amount <= 999){
    console.log("5% discount applicable")
    let payable_amount = 0.95*cart_amount
    console.log("You have to pay", payable_amount)
}
else if (cart_amount <= 1999){
    console.log("10% discount applicable")
    let payable_amount = 0.9*cart_amount
    console.log("You have to pay", payable_amount)
}
else if (cart_amount <= 2999){
    console.log("15% discount applicable")
    let payable_amount = 0.85*cart_amount
    console.log("You have to pay", payable_amount)
}
else{
    console.log("20% discount applicable")
    let payable_amount = 0.8*cart_amount
    console.log("You have to pay", payable_amount)
}