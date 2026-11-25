// let count = 0;

// let result = document.getElementById("count");

// let increment = document.getElementById("increment");
// let decrement = document.getElementById("decrement");

// increment.addEventListener("click", function() {
//     count++;
//     result.innerText = count;
// })

// decrement.addEventListener("click", function() {
//     count--;
//     result.innerText = count
// })



let result = document.getElementById("count")

let increment = document.getElementById("increment")
let decrement = document.getElementById("decrement")

function increase(){
    Count.textContent = Number(count.textContent) + 1
}
function decrease(){
    Count.textContent = Number(count.textContent) - 1
}