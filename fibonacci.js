
function fibonacci(n){
     
 var arr = [];
 var num1 = 0,num2 = 1;
 for(var i=0;i<n;i++){
    arr.push(num1);
    var num3 = num2+num1;
    num1 = num2;
    num2 = num3;
 }
 return arr;

}

var n = 10;
console.log(fibonacci(n))