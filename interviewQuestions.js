

// Question 1
declaration();
// expression();

// This will hoisted so it will print Calculating..... in console but in expression function not hoisted with arrow function
function declaration(){
    console.log("Calculating.....")
}

const expression = ()=>{
    console.log("Again Calculating.....")
}


//Question 2

for(var i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i)
    },100)
}
// This will print 3 three times, why because var has function scope and it is in closure, so setTimeOut i have the access
//of for loop

//If I want to print 0,1,2...need to change the var to let, because let is a block scope

for(let i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i)
    },100)
}

