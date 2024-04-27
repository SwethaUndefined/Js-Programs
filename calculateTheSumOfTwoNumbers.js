
var pairs = []
function pairOfNumbers(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === num) {
          pairs.push([arr[i],arr[j]])     
      }
    }
  }
  return pairs
}

var arr = [1, 14, 2, 13, 7, 8, 9, 6, 2, 4, 7];
console.log(pairOfNumbers(arr, 15)) 
