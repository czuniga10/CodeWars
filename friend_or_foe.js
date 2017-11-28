// Description:
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// Note: keep the original order of the names in the output.



//My solution:

function friend(friends){
    var answer= [];
    for(var i=0;i<=friends.length-1;i++){
      if(friends[i].length==4){
        answer.push(friends[i])
        }
     }
    return answer;
  }


  //Other solutions:

  function friend(friends){
    return friends.filter(n => n.length === 4)
  }

  //______________

  const friend = friends => friends.filter(friend => friend.length == 4);