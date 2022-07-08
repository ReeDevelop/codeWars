/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */

// My Solution
var uniqueInOrder = function(iterable){
    if(iterable == [null]){
      return [];
    }else if(Array.isArray(iterable) === false){
      let iterableArr = iterable.split('');
      let newArr = [];
      newArr.push(iterableArr[0]);
      for(let i = 1; i < iterableArr.length; i++){
        if(iterableArr[i] != iterable[i - 1]){
          newArr.push(iterableArr[i])
        }
      }
      return newArr;
    }else if(Array.isArray(iterable) === true){
      let newArr = [];
      newArr.push(iterable[0]);
      for(let i = 1; i < iterable.length; i++){
        if(iterable[i] != iterable[i - 1]){
          newArr.push(iterable[i])
        }
      }
      return newArr;
    }
}

//Top Solution
function uniqueInOrder(it) {
    var result = []
    var last
    
    for (var i = 0; i < it.length; i++) {
      if (it[i] !== last) {
        result.push(last = it[i])
      }
    }
    
    return result
}

//Other Top Solution
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}