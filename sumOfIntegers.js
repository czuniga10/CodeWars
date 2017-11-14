//add up all the whole numbers from 1 through a given number n.


function f(n){
    if (Number.isInteger(n) && n>0) {
    var answer = n * (n+1)/2;
    return answer;
    }else{
    return false;
    }
  };




// other answers:

function f(n){
    return (parseInt(n) === n && n > 0) ? n*(n+1)/2 : false;
  };


//___________

function f(n){
    if(typeof n != 'number' || n <= 0 || Math.floor(n) != n)
      return false;
    return n * (n + 1) / 2;
  };

//___________

  function f(n) {
    var sum = 0;
    if (Math.round(n) !== n) {
        return false;
    } else if (n >= 1) {
        for (var i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    } else {
        return false;
    }
}