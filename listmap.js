let array1 = [10,20,30,40,50]
// let new_arr = []
// for(let i in array1){
//     new_arr.push(array1[i]+100)
// }

// console.log(new_arr)

let res = array1.map((i)=>{
    return i+100
})

console.log(res)



let res2 = array1.filter((i)=>{
    return i > 30
})

console.log(res2)