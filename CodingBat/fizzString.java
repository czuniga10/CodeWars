// Given a string str, if the string starts with "f" return "Fizz". If the string ends with "b" return "Buzz". If both the "f" and "b" conditions are true, return "FizzBuzz". In all other cases, return the string unchanged. (See also: FizzBuzz Code)


// fizzString("fig") → "Fizz"
// fizzString("dib") → "Buzz"
// fizzString("fib") → "FizzBuzz"

public String fizzString(String str) {
    int len = str.length()-1;
    if(str.charAt(0) == 'f' && str.charAt(len) == 'b')
      return "FizzBuzz";
    if(str.charAt(0) == 'f') {
      return "Fizz";
    } else if (str.charAt(len) == 'b'){
      return "Buzz";
    }
    return str;
}