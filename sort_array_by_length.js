// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.


//my solution:

function sortByLength (array) {
    var answer = [];
    return array.sort( 
        function (a,b) {
          if (a.length > b.length) return 1;
          if (a.length < b.length) return -1;
            answer.push(0)
          }
        )
        return answer;
  }

//   tests:

Test.assertSimilar(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
});
Test.it("Test 2",function(){
  Test.assertSimilar(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
});
Test.it("Test 3",function(){
  Test.assertSimilar(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);





// other answers:

function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
  };

