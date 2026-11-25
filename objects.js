// objects - 
// Objects is a key-value pair data structure in jacascript. AN object is a collection of properties , where each property has a name (key) and a value, the value can be of any data type, including numbers, strings, arrays, and even other objects . Objects are used to represent real-world entities and their attributes in a structured way.

// creating an object

let person = {
    name : "john",
    age : 21,
    city : "New York"
}
console.log(person)


//-------------------------------------------------------------------------------------------------------------

// Accessing the values of an object

// 1. Dot notation - 
console.log(person.name)
console.log(person.city)

// 2. Bracket notation - 
console.log(person["age"])

//-------------------------------------------------------------------------------------------------------------

// Adding new property to an object.

person.occupation = "Engineer"
console.log(person)

//-------------------------------------------------------------------------------------------------------------

// Updating an existing property of an object
person.age = 31
console.log(person)

//-------------------------------------------------------------------------------------------------------------

// Deleting a property from an object.
delete person.city
console.log(person)

//-------------------------------------------------------------------------------------------------------------

// An object can contain arrays , string , boolean , decimal values , objects and functions as well

let student = {
    stuID : 101,
    Name  :"Alice",
    Subjects : ["Maths" , "Science" , "English"],
    marks : [85, 90 , 57],
    isPasses : true,
    address  :{
        City : "Los Angeles",
        State : "California",
        Country : "USA"
    },
    greet : function(){
        console.log("Hii I am Alice")
    }
}
console.log(student)
console.log(student.Subjects[1])
console.log(student.address.State)

student.greet()


//-------------------------------------------------------------------------------------------------------------

// Methods of objects - 
// object.keys()
console.log(Object.keys(student))


//object.value()
console.log(Object.values(student))

//object.entries()
console.log(Object.entries(student))


//-------------------------------------------------------------------------------------------------------------

// iteration over an object using for in loop
// It access keys by default

for (let key in student){
    console.log(key)
}



for (let key in student){
    console.log(key, student[key])
}




for (let key in student){
    console.log(student[key])
}


//-------------------------------------------------------------------------------------------------------------

let Student = {
    Name : "jon",
    Age : 23,
    Course : ["web dev", "python", "data science "],
    Marks : [81,78,65]
}

console.log(Student.Name)
console.log(Student.Age)
console.log(Student.Course[1])
console.log(Student.Marks[2])
console.log(Student.Marks[0])


console.log(Student["Name"])
console.log(Student["Age"])



Student.email = "jon@gmail.com"
console.log(Student)

delete Student.Course
console.log(Student)