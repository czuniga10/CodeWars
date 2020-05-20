/*
Task
You will receive an array as parameter that contains 1 or more integers and a number n.

Here is a little visualization of the process:

Step 1: Split the array in two:

[1, 2, 5, 7, 2, 3, 5, 7, 8]
      /            \
[1, 2, 5, 7]    [2, 3, 5, 7, 8]
Step 2: Put the arrays on top of each other:

   [1, 2, 5, 7]
[2, 3, 5, 7, 8]
Step 3: Add them together:

[2, 4, 7, 12, 15]
Repeat the above steps n times or until there is only one number left, and then return the array.

Example
Input: arr=[4, 2, 5, 3, 2, 5, 7], n=2


Round 1
-------
step 1: [4, 2, 5]  [3, 2, 5, 7]

step 2:    [4, 2, 5]
        [3, 2, 5, 7]

step 3: [3, 6, 7, 12]


Round 2
-------
step 1: [3, 6]  [7, 12]

step 2:  [3,  6]
         [7, 12]

step 3: [10, 18]


Result: [10, 18]
*/
function splitAndAdd(arr, n) {
  var currArr = arr;
  var temp1 = [];
  var temp2 = [];
  var result = [];
  while(n > 0) {
    var half = Math.floor(currArr.length / 2);
    temp1 = currArr.splice(0,half).reverse();
    temp2 = currArr.splice(0,currArr.length).reverse();
    currArr = [];
    for (var i = 0; i < Math.max(temp1.length, temp2.length); i++) {
      currArr.push((temp1[i] || 0) + (temp2[i] || 0));
    }
    currArr.reverse();
    n--;
  }
  result = currArr;
  return result;
}
