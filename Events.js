let username = document.getElementById("username")
let password = document.getElementById("password")
let form = document.getElementById('form')
let submit = document.getElementById('submit')

console.log(submit)

function getData(){
    uname = username.value
    upass = password.value
    console.log(uname)
    console.log(upass)


    if (uname != "" && upass != ""){
        submit.disabled = false
    }
}

form.addEventListener('change', getData)