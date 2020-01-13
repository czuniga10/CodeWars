// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// My code

class SmallestIntegerFinder {
    findSmallestInt(args) {
      var answer = args[0];
      for (var i = 0; i < args.length; i++) {
        if ( args[i] < answer ) {
          answer = args[i]
        }
      }
    return answer;
    }
  }




//   Other answers:

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

//______________

class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort(function(a, b) {
      return a - b; } )
      return args[0];
    }
  }

//_____________

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b)=>a-b)[0];
    }
  }