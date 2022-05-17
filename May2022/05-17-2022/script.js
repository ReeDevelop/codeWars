// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    const numArray = x.map(x => Number(x));
    return numArray.reduce((acc, current) => acc + current, 0);
}