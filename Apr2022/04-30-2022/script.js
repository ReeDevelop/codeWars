// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    if(array.length === 0){
      return 0;
    }else{
      let howManyNums = 0
      let additionTotal = array.reduce((acc,c) => acc + c, 0);
      for(let i = 0; i < array.length; i++){
        howManyNums = howManyNums + 1;
      }
      return additionTotal / howManyNums;
    }
}

var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}