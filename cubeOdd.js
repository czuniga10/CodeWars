// Find the sum of the odd numbers within an array, 
// after cubing the initial integers. This function 
// will return undefined (NULL in PHP) if any of the 
// values aren't numbers.

//My solution:

function cubeOdd(arr) {
    var newArr = [];
    var odd = [];
    var answer = 0;
    for (var x = 0; x < arr.length; x++) {
      if (isNaN(arr[x])) {
        return undefined;
      }
    }
    for (var i = 0; i < arr.length; i++) {
      newArr.push( arr[i] * arr[i] * arr[i] )
      if( newArr[i]%2 !==0) {
        odd.push(newArr[i])
    }
  }
    for(var j = 0; j < odd.length; j++) {
      answer += odd[j]
    }
    return answer;
}

  // Tests

  Test.assertEquals(cubeOdd([1, 2, 3, 4]), 28);
  Test.assertEquals(cubeOdd([-3,-2,2,3]), 0);
  Test.assertEquals(cubeOdd(["a",12,9,"z",42]), undefined);


// Other answers

let cubeOdd = a => {
    var isNumeric = a.every(x=>!isNaN(x))
    return isNumeric ? a.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
  }

  //______________

  function cubeOdd(arr) {
    return arr.some(i => {
      return isNaN(i);
    }) ? undefined : arr.map(i => {
      return Math.pow(i, 3); 
    }).filter(i => {
      return i % 2 !== 0;
    }).reduce((prev, current) => {
      return prev + current;
    }, 0);
  }

  //______________

  function cubeOdd(arr) {
    result = 0;
    for(i=0;i<arr.length;i++){
      if(isNaN(arr[i])){return undefined;}
      if(arr[i]%2!==0){result += Math.pow(arr[i], 3);}
    }
    return result;
  }

  //_______________

  function cubeOdd (arr) {
    
      let sum = 0;
      
      for (let num of arr)
        if (num !== +num)
          return;
        else if (num % 2)
          sum += num * num * num;
    
      return sum;
      
    }