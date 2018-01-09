//Create a function that returns the average of an array of numbers
// ("scores"), rounded to the nearest whole number. You are not 
//allowed to use any loops (including for, for/in, while, and do/while loops).

// my answer:


function average(scores) {
    var sum = scores.reduce(function(a,b){
      return a + b;
      });
     var avg = Math.round(sum/scores.length);
     return avg;
    }

