// int[] numbers = {-1, 2, -1, 0, 2, 2}; Find the number of duplicates. -1 has 1 duplulicate and 2 has 2 duplicates. So the answer to this equation is 3

var arr = [-1,2,-1,0,2,2];

function findDups(array) {
    const sortedArr = array.sort();
    let result = 0;
    for(var i = 0; i < array.length; i++) {
        sortedArr[i+1] === sortedArr[i] ? result++ : 0;
    }
    return result;
}

findDups(arr);