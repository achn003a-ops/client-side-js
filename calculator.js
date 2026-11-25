let result = document.getElementById("result")

let ops = ['+', '-', '*', '%', '/']

function selectNumber(num){
    result.value += num
}

function selectOp(op){
    let last_el = result.value.slice(-1)
    console.log(last_el)
    console.log(ops.includes(last_el))

    if(result.value == ""){
        return
    }
    else if (ops.includes(last_el)){
        result.value = result.value.replace(result.value.slice(-1), op)
    }
    else{
        result.value += op
    }
    // result.value += op
}

function output(){
   let answer =  eval(result.value)
   result.value = answer
}

function cleardisplay(){
    result.value="";
}