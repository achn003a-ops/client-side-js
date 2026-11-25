// loops - Count-based and condition-based
// Loops must have a stopping condition.


// let correct_password = "admin123"

// let user_password_input = prompt("Enter Password")

// while (user_password_input != correct_password){
//     console.log("Incorrect password Entered")
//     user_password_input = prompt("Enter Password")
// }


// let num = Number(prompt("Enter a number"))

// while (num > 0){
//      console.log(num)
//     num = Number(prompt("Enter a number"))
// }


// let count = 0
// while (count < 5){
//     console.log("welcome to js loops")
//     count++
// }


// let count = 1
// let num = Number(prompt("Enter a number"))

// while (num > 0){
//     console.log("Positive number :", num)
//     num = Number(prompt("Enter a number"))
//     count ++
// }

// console.log(count)

// let even_count = 1
// let odd_count  = 1
// let num = Number(prompt("Enter a number"))

// while (num > 0){
//     if (num %2== 0){
//         even_count++
//     }
//     else{
//         odd_count++
//     }
//     num =Number(prompt("Enter number"))
// }

// console.log("Even Number :", even_count)
// console.log("Odd Number :", odd_count++) 


// write a js program using while loop that repeaatedly ask user to enter a password. Allow maximum three attempt if user enters correct password then display login successfull and if all three attempts are incorrect display account lock

// let correct_pass = "admin123"

// let pass = prompt("Enter your password")

// let attempt = 1

// while (attempt < 3){
//     if (pass != correct_pass){
//         pass = prompt("Enter your password")
//         console.log("Incorrect password entered")
//     }
//     else{
//         console.log("Login Successful")
//     }
//      attempt++
// }


// let correct_pass = "admin123"

// let pass = prompt("Enter your password")

// let attempt = 1

// while (attempt < 3){
//     if (pass != correct_pass){
//         pass = prompt("Enter your password")
//         console.log("Incorrect password entered")
//     }
//     attempt++
// }
// if (pass = correct){
//     console.log("Login Successful")
// }
// if (attempt == 3){
//     console.log("Account Locked")
// }


// 2. for(initialization , condition , inc/dec)

// for(let i=0; i<5; i++){
//     console.log(i)
// }


// for(let i=2; i<=10; i++){
//     console.log(i)
// }

// for(let i=10; i>=1; i--){
//     console.log(i)
// }




// for(let i=1; i<=20; i++){
//     if (i %2==0){
//         console.log("Even number", i)
//     }
// }


// for(let i=0; i<=10; i++){
//     console.log(`2 * ${i} = ${2*i}`)
// }


// control flow statement - 
// for(let i=0;i<=5;i++){
//     if (i==2){
//         continue
//     }
//     console.log(i)
// }



// for(let i=1;i<=50;i++){
//     if(i%3==0 && i%5==0){
//         continue
//     }
//     console.log(i)
// }


// for(let i=0;i<=20;i++){
//     if (i==6){
//         break
//     }
//     console.log(i)
// }


// let sum=0
// for(let i=1;i<=20;i++){

//     sum=sum+i
// }
// console.log(sum)


// let sum=0
// let i;
// for(i=0;i<=31;i++){
// sum=sum+i
// if(sum>=121){
// break
// }
// }
// console.log("Last Number Added", i-1)
// console.log("sum :",sum)



// let correct_pass = 1234
// let pass = Number(prompt("Enter password"))

// attempt = 1

// while(attempt < 3){
//     if(pass == " "){
//         console.log("Empty password")
//         pass = Number(prompt("Enter password"))
//         continue
//     }
//     if(correct_pass == pass){
//         console.log("Login Successful")
//         break
//     }
//     else{
//         attempt++
//         console.log("Incorrect password. Try again")
//         pass = Number(prompt("Enter password"))
//     }
// }

//      if (attempt >= 3){
//         console.log("Account Locked")
//      }




for(i=0;i<10;i++){
    console.log("Hello Javascript")
}



user = Number(prompt("Enter a number"))
for(i=1;i<11;i++){
    console.log(`${user} * ${i} = ${user*i}`)

}


for(i=1;i<=30;i++){
    if(i%17==0){
        break
    }
    console.log(i)
}

let user = Number(prompt("Enter marks"))
while(user > 0){
    if(user<0){
        break
    }
    user = Number(prompt("Enter marks"))
    console.log(user)
}