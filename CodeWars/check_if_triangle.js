// Implement a method that accepts 3 integer values a, b, c. 
// The method should return true if a triangle can be built 
// with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 
//     0 to be accepted).

// my solution: 

function isTriangle(a,b,c) {
    if (a + b > c && a + c > b && b + c > a) {
     return true;
  }  else {
     return false;
     }
  }


// other solutions:

function isTriangle(a,b,c)
{
  [a, b, c] = [a, b, c].sort((x, y) => x-y);
  
  return a+b > c;
}

//_______________

var isTriangle = (a,b,c) => Math.max(a,b,c)<(a+b+c)/2

