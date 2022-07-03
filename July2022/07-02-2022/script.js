/* Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] ); */

let capitals = function (word) {
  let caps = [];
  const arr = word.split('');
  for(let i = 0; i < arr.length; i++){
    let holder = arr[i];
    if(holder === holder.toUpperCase()){
      caps.push(i);
    }
  }
  return caps;
};