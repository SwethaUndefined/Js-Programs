//map

var arr = [1,2,3,4,5];
console.log({arr})
var ans = arr.map((item)=>{
    return item * 2;
})
console.log({ans})
console.log({arr})

//ForEach
console.log({arr})
arr.forEach((item)=>{
    console.log(item * 2) 
})
console.log({arr})


// Map will create a new array whereas ForEach will not create the newArray. By the use of return, use return the value in
//map but in forEach no return is used we directly console the value.
