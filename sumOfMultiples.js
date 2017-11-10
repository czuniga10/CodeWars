// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

// my answer:

function findSum(n) {
    answer = n; 
    for (var i = 0; i < n; i++) {
      if (i % 5 === 0 || i % 3 === 0) {
        answer += i;
       }
    }
    return answer;
  }

  // Other answers:

  function findSum(n) {
    if (n < 3) return 0
    return (n % 3 === 0 || n % 5 === 0) ? n + findSum(n-1) : findSum(n-1)
   }
