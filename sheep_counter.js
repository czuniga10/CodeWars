// Code Wars -- Sheep Counter

//Consider an array of sheep where some sheep may be missing from their place. 
//We need a function that counts the number of sheep present in the array (true means present).


//my answer:


function countSheeps(array) {
    var answer = 0;
    for (var i=0;i<array.length;i++){
      if (array[i] == true)
        answer++; //if current # on the array = true...
                  //count 1 and loop it through again
  }
      return answer;
  }

  // tests:

  var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];
    
Test.expect(countSheeps(array1) == 17, "There are 17 sheeps in total")


//other solutions:

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }

  // ____________________________-

  function countSheeps(arrayOfSheeps) {
    var sheeps = 0;
    for(var i in arrayOfSheeps){
      arrayOfSheeps[i] ? sheeps++ : null;
    }
    return sheeps;
  }