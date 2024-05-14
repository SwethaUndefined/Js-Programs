
function sumOfTwoNumbers(arr,num){
   var pairs= [];
   for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j]==num){
        pairs.push([arr[i],arr[j]])
      }
    }
   }
   return pairs;
}


var arr = [1,2,3,4,5,0];
console.log(sumOfTwoNumbers(arr,5))