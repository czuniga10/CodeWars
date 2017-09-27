//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, and u as vowels for this Kata.


function getCount(str) {
  var vowelsCount = 0;
  str = str.toLowerCase().split('');//moving to lower case and splitting string per char
    for(var i = 0;i<str.length;i++){
      if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){//checking str for vowels
        vowelsCount++;//if above is true, add 1 to vowelsCount
    }
  }
  return vowelsCount;
}


//other answers:

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

//___________

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }

  //_________

  // w/ ternary statement

  function getCount(str) {
    var vowelsCount = 0;
    vowelsCount = str.match(/[aeiou]/gi);
    return vowelsCount ? vowelsCount.length:0;
  }