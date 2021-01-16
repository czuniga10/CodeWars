/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1

e -> 2

i -> 3

o -> 4

u -> 5

For example, encode("hello") would return "h2ll4" There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there"

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

function encode(string) {
  var result = "";
  for(var i = 0; i < string.length; i++) {
    switch(string[i].charCodeAt(0)) {
      case 97:
        result += "1";
        break;
      case 101:
        result += "2";
        break;
      case 105:
        result += "3";
        break;
      case 111:
        result += "4";
        break;
      case 117:
        result += "5";
        break;
      default:
        result += string[i];
        break;
    }
  }
  
  return result;
}


 function decode(string1) {
  var result = "";
  for(var i = 0; i < string1.length; i++) {
    switch(string1[i]) {
      case "1":
        result += "a";
        break;
      case "2":
        result += "e";
        break;
      case "3":
        result += "i";
        break;
      case "4":
        result += "o";
        break;
      case "5":
        result += "u";
        break;
      default:
        result += string1[i];
        break;
    }
  }

  return result;
}
