/*
I have submitted a bug ticket for this kata since none of my solutions were working, but had similar/better time complexity than solutions that were accepted...



Background:
You're working in a number zoo, and it seems that one of the numbers has gone missing!

Zoo workers have no idea what number is missing, and are too incompetent to figure it out, so they're hiring you to do it for them.

In case the zoo loses another number, they want your program to work regardless of how many numbers there are in total.

Task:
Write a function that takes a shuffled list of unique numbers from 1 to n with one element missing (which can be any number including n). Return this missing number.

Note: huge lists will be tested.

Examples:
[1, 3, 4]  =>  2
[1, 2, 3]  =>  4
[4, 2, 3]  =>  1
*/

/* Too Slow of a solution, but works
function findNumber(array) {
  array = array.sort((a, b) => a-b);
  if(array[0] != 1) {
    return 1;
  }
  var result = 0;
  var end = array[array.length-1]
  console.log(end)
  array.forEach(el => {
    if(array[array.indexOf(el)+1] != (el+1) && el+1 <= end) {
      result = el+1;
    }
  })
  return result;
*/

/* Too Slow of a solution, but also works
// return the missing number!
function findNumber(array) {
  array = array.sort((a,b) => a-b)
  var result = array[array.length-1]*(array[array.length-1]+1) / 2 - array.reduce((a,b) => a+b);
  return result != 0 ? result : array[array.length-1] + 1;
}
*/

/* Too slow of a solution, but works
// return the missing number!
function findNumber(array) {
  result = 0;
  for(var i = 1; i < array.length+1; i++) {
    if(array.indexOf(i) < 0) {
      result = i;
      break;
    }
  }
  
  return result != 0 ? result : array.length+1;
}
*/
