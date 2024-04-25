

function findTheUniqueValueInArray(arr){
   var ans = arr.find((item)=>{
      return arr.indexOf(item) === arr.lastIndexOf(item)
   })
   console.log(ans)
}


var arr = [1,2,3,4,5,2,3,4,5];

findTheUniqueValueInArray(arr)