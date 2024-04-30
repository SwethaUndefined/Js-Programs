

function findtheElementInTheArray(arr,num){

   const index = arr.indexOf(num);
   return index !== -1 ? index : -1
}

var arr = [1,2,3,4,5,6,7,8]

console.log(findtheElementInTheArray(arr,4))