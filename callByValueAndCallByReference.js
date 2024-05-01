//callByValueAndCallByReference



var a = 10;
var b = a;
console.log(a)
console.log(b)
b = 20;
console.log(a)
console.log(b)

var obj = {
    name : "Swetha",
    age : 20
}
console.log(obj)

var obj1 = obj;

obj1.name = "Ramya"
console.log(obj1)