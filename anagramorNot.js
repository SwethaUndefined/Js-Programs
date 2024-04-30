

function anagramOrNot(str1, str2) {
    var arr1 = str1.split("").sort().join("");
    var arr2 = str2.split("").sort().join("");
    return arr1 === arr2;
}

console.log(anagramOrNot("param", "rapam")); // Output: true
console.log(anagramOrNot("listen", "silent")); // Output: true (corrected)
console.log(anagramOrNot("hello world", "world hello")); // Output: true


