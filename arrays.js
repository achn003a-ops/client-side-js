// Arrays in js - 
// An array is a special variable, which can hold more than one value at a time. In javascript , arrays are used to store multiple values in a single variable.


// creating an array - 
let marks = [90,80,77,65]
console.log(marks)
console.log(typeof(marks))

// indexing of an array - 
array = [90,80,77,65]
console.log(array[1])


// accessing each elements of an array using for of loop - 

for(i of marks){
    console.log(i)
}


//--------------------------------------------------------------------------------------------------------------


// Array properties and methods 


//1 . length
console.log(marks.length)

// Adding and element to an array -
// push() - add an element to the end of an array
marks.push(100)
console.log(marks)

// unshift() - add an element to the beginning of an array
marks.unshift(50)
console.log(marks)


// removing elements from an array - 
// pop() - removes an elements from the end of an array
marks.pop()
console.log(marks)


// shift() - removes elements from the beginning of an array 
marks.shift()
console.log(marks)


// finding the index of element in an array 
console.log(marks.indexOf(90))

// in above methods, all methods changes the original existing array.




// slicing of an array -  It does not change original array but it make an copy of an array
console.log(marks.slice(1,4))

//replacing elements of an array -  
marks[0] = 95
console.log(marks)

//splice - removes , replace and add elements in an array.

//syntax - array_name.splice(start_index, delete_count, add_elemets)

marks.splice(1,0,88,99)
console.log(marks)

marks.splice(1,2)
console.log(marks)

marks.splice(4,1,300,400)
console.log(marks)


// sorting of an array 
// marks.sort()
// console.log(marks)


//reverse 
marks.reverse()
console.log(marks)


//-------------------------------------------------------------------------------------------------------------

// accessing elements with for loop - 
let sum = 0

for (let i = 0; i < marks.length; i++){
    console.log(marks[i])
    total = sum + marks[i]
}
console.log("Total marks :",sum)




let arr = [10, 20, 30, 40, 50]
let total = 0

for (let i = 0; i < arr.length; i++) {
    total = total + arr[i]
}

let average = total / arr.length

console.log("Average:", average)






let array = [10, 20, 10, 30, 10, 40]
let target = 10
let count = 0

for (let i = 0; i < arr.length; i++) {
    if (array[i] === target) {
        count++
    }
}

console.log("Occurrences:", count)



