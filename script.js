// პირველი დავალება
function shedareba(a,b) {
    if (a===b){
        console.log("ტოლია")
    }else{
        console.log("არ არის ტოლი")
    }
}
shedareba(2,2)


// მეორე დავალება
function temperatura(farenheiti){
    if (typeof farenheiti === 'number') {
        console.log((farenheiti - 32) * 5/9)
    }else{
        console.log(false)
    }   
}
temperatura(50)

// მესამე დავალება
function operacia(a,b,operation){
    if(typeof a === 'number' && typeof b === 'number' && operation == "+"){
        console.log(a+b)
    }else if(typeof a === 'number' && typeof b === 'number' && operation == "-"){
        console.log(a-b)
    }else if(typeof a === 'number' && typeof b === 'number' && operation == "*"){
        console.log(a*b)
    }
    else if(typeof a === 'number' && typeof b === 'number' && operation == "/"){
        console.log(a/b)
    }else{
        console.log(false)
    }
}
operacia(2, 4 ,'*')
