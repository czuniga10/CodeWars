/*
Here you have to do some mathematical operations on a "dirty string". This kata checks some basics, it's not too difficult.

So what to do?

Input: String which consists of two positive numbers (doubles) and exactly one operator like +,-,*,/, always between these numbers. The string is dirty, which means that there are different characters inside too, not only numbers and the operator. You have to combine all digits left and right, perhaps with "." inside (doubles) and to calculate the result which has to be rounded to an integer and converted to a string at the end.

Easy example:

Input: "gdfgdf234dg54gf*23oP42"
Output: "54929268" (because 23454*2342=54929268)
First there are some static tests, later on random tests too...
*/


function calculateString(str){
  var first = "";
  var second = "";
  var math = "";
  var flag = false;
  
  for(var i = 0; i < str.length; i++) {
    if(str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/') {
      flag = true;
      math = str[i];
    }
    if(str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 57 || str[i].charCodeAt(0) == 46) {
      if(!flag) {
         first += str[i];
      } else {
        second += str[i];
      }
    }
  }
  return Math.round(eval(first + math + second)).toString();
}
