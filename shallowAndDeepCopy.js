var a = 10;
var b = a;
console.log(a)
console.log(b)
b = 20;
console.log(a)
console.log(b)
// Shallow Copy, it has own memory and b is stored with seperate memory so when i change the value of b it wont affect a


var arr1 = [1,2,3]
var arr2 = arr1;
console.log(arr1)
console.log(arr2)
arr2.push(4)
console.log(arr1)
console.log(arr2)
// Deep copy, it has reference not value in the memory, so when i change the value in the arr2 it will affect in arr1