// Given a string, you have to return a string in which each character 
// (case-sensitive) is repeated once.

// my answer

function doubleChar(str) {
  var answer = ''
  for (var i = 0; i<str.length;i++) {
  answer += (str[i] + str[i]);
  }
  return answer;
}

// other answers

const doubleChar = (str) => str.split("").map(c => c + c).join("");

//_______

function doubleChar(str) {
    return str.replace(/(.)/g, "$1$1")
  }

//______

