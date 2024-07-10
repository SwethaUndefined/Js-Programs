


var arr= [1,2,3,0,0,0,4,5,6,8]

var newArr = []
for(var i=0;i<arr.length;i++){
    if(arr[i]==0){
        newArr.push(arr[i])
    }
    else{
        newArr.unshift(arr[i])
    }
}
console.log(newArr)