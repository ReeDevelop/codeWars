// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum // of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    let newArr = []
      if(input == null || input.length === 0){
        return newArr;
      }else{
        const positiveFilter = input.filter(positive => positive > 0);
        const negativeResult = input.filter(negative => negative < 0).reduce((acc,c) => acc + c, 0);
        let positiveCounter = 0
        for(let i = 0; i < positiveFilter.length; i++){
          positiveCounter = positiveCounter + 1
        }
          return [positiveCounter, negativeResult]
      }
}

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}