

function outerScope(){
    var a = 10;
    return function innerScope(){
      return a;
    }
}
var ans = outerScope()
console.log(ans())