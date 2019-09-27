//Your task is to implement a function which takes a string as input 
//and return an object containing the properties vowels and consonants. 
//The vowels property must contain the total count of vowels {a,e,i,o,u}, 
//and the total count of consonants {a,..,z} - {a,e,i,o,u}. Handle invalid 
//input and don't forget to return valid ones.

function getCount(words) {
    var result = { vowels: 0, consonants: 0 }
    if(typeof words !== "string") {
       return result;
    }
    var arr = words.toUpperCase().split("");
    var vowels = 0;
    var consonants = 0;
    
    for(var i = 0; i < arr.length; i++) {
      if(arr[i].charCodeAt(0) < 65 || arr[i].charCodeAt(0) >= 90) {
        continue;
      }else {
        if(arr[i] === 'A' || arr[i] === 'E' || arr[i] === 'I' || arr[i] === 'O' || arr[i] === 'U') {
          vowels++;
        }else {
          consonants++;
        }
      }
    }
    result.vowels = vowels;
    result.consonants = consonants;
    return result;
  }