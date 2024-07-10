function reverseWordsInString(str) {
    const wordsArray = str.split(' ');
  
    // Reverse each word in the array
    const reversedWordsArray = wordsArray.map(word => {
      return word.split('').reverse().join('');
    });
  
    // Join the reversed words back into a single string
    const reversedStr = reversedWordsArray.join(' ');
  
    return reversedStr;
  }
  
  const str = "My name is";
  const result = reverseWordsInString(str);
  console.log(result);