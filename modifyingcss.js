let container = document.getElementById("container")
let para = document.getElementById("para")
let change_mode = document.getElementById("change-mode")
let heading = document.getElementById("heading")
// console.log(container.style)
// console.log(para.style)


console.log(container.classList)
console.log(para.classList)

change_mode.addEventListener("click", ()=>{
container.classList.toggle("container-light")
para.classList.toggle("para-light")
heading.classList.toggle("h1-light")

if (change_mode.textContent == "Light Mode"){
    change_mode.textContent = "Dark Mode"
}
else{
    change_mode.textContent = "Light Mode"
}
})

