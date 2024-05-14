

function findLargestWord(str){
    var splitThewords = str.split(" ");
    console.log(splitThewords);
    let longestWord = "";
    for(var i=0;i<splitThewords.length;i++){
        if(splitThewords[i].length > longestWord.length)
        longestWord = splitThewords[i];
    }
    return longestWord;
}




var str = "I love Javascript findLargestWord"
console.log(findLargestWord(str))