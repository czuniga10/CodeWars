// Complete the solution so that it reverses the string value passed into it.

// my solution:


function solution(str){
    var answer = '';
    for (var i = str.length - 1; i >= 0; i--) {
      answer += str[i];
    }
    return answer;
  }


//   other solution:

  function solution(str){
    return str.split('').reverse().join('');  
  }