//Array Destructuring

var arr =  [1,2,4];
var [a,b,c] = arr;
console.log(a)
console.log(b)
console.log(c)


//Object destructuring

var obj = {firstName : "Swetha",age : 24}

const {firstName,age} = obj;
console.log(firstName)
console.log(age)

var obj1 = {
    a1 : "Swetha",
    b1 : 24,
    obj2 : {
        lastName : "Ragunathan"
    }
}

const{a1,b1,obj2: { lastName }} = obj1;
console.log(a1)
console.log(b1)
console.log(lastName)


