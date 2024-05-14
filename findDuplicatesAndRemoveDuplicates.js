var arr = [1,2,3,4,4,5,2];

var ans = [...new Set(arr)]
console.log(ans)


var arrr = [1,2,3,4,4,5,2];

var duplicates = arrr.filter((element,index)=> arr.indexOf(element) !== index)
console.log(duplicates)