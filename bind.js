

var obj = {
    name : "Swetha Ragunathan",
    age : 25,
    getInfo : function(){
        return this.name + " "+this.age
    }
}

var newObj = obj.getInfo;
// console.log(newObj())

var ans = newObj.bind(obj)
console.log(ans())
