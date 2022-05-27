/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s){
    const s2 = s.split(' ');
    let short = s2[0];
    for(let i = 0; i < s2.length; i++){
      if(s2[i].length < short.length){
        short = s2[i];
      }
    }
    return short.length;
}

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}