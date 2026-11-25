let a = "javascript"

console.log(a)
console.log("type of a : ", typeof(a))

// accessing a single character of a string using index
console.log(a[0])
console.log(a[9])

// Checking length of a string - 
console.log(a.length)




// pass = prompt("Enter a password")
// if(pass.length < 8){
//     console.log("Password must be 8 charactrer long")
// }
// else{
//     console.log("Password accepted")
// }

// iterating over a loop - 
for(character of a){
    console.log(character)
}

//--------------------------------------------------------------------------------------------------------

// string in built methods - 

let str = "javascript is a programming language"

// ----------------------------------------------------------------------------------------------------------

// 1. case conversion - 
// toUppercase()-
console.log(str.toUpperCase())

//toLoxerCase - 
console.log(str.toLowerCase())

// --------------------------------------------------------------------------------------------------------------

// 2. Removing Extra spaces - 
str = "         hello       "
console.log(str)
// trim()
console.log(str.trim())

// trimStart()
console.log(str.trimStart())

// trimEnd()
console.log(str.trimEnd())

// -------------------------------------------------------------------------------------------------------------

//3. Extracting parts of string - 

str = "javascript is a programming language"

// slice()
console.log(str.slice(1,7))
console.log(str.slice(-8))

// substring - 
console.log(str.substring(1,7))

//--------------------------------------------------------------------------------------------------------------

// 4. at
console.log(str.at(3))
console.log(str.at(-2))

//----------------------------------------------------------------------------------------------------------

//5.charAt
console.log(str.charAt(3))
console.log(str.charAt(-2))

//----------------------------------------------------------------------------------------------------------

// 6. indexof
console.log(str.indexOf("p"))
console.log(str.indexOf("k"))

//----------------------------------------------------------------------------------------------------------

// 7. replace
console.log(str.replace("a","A"))
console.log(str.replaceAll("a","A"))

//----------------------------------------------------------------------------------------------------------

// 8. includes - 
let email = "admin123@gmail.com"
console.log(email.includes("@"))

//----------------------------------------------------------------------------------------------------------
9/ console.log(str.split(" "))