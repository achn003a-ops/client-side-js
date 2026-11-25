let add = document.getElementById("add")
let input = document.getElementById("number")
let container = document.getElementById("container")
let remove = document.getElementById("remove")
let p = document.getElementById("p")



remove.addEventListener("click", ()=>{
    p.remove()
})
add.addEventListener("click", ()=>{
    // let para= document.createElement('p')
    // para.textContent = "this is dynamically created paragraph"
    // para.classList.add("para")
    // document.body.prepend(para)


    let val = input.value 
    console.log(val)

    for(let i=0; i<=val; i++){
    
    let name_input= document.createElement("input")
    name_input.type = "text"
    name_input.placeholder = "Enter Name"
    // document.body.append(name)
    conatainer.append(name_input)
    }
})