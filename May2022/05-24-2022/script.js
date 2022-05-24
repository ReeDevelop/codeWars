/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

function XO(str) {
    let oCounter = 0
    let xCounter = 0
    let newStr = str.split('')
    for(let i = 0; i < str.length; i++){
      if(str[i] == 'X' || str[i] == 'x'){
        xCounter = xCounter + 1
      }else if(str[i] == 'O' || str[i] == 'o'){
        oCounter = oCounter + 1
      }
    }
    if(oCounter == xCounter){
      return true;
    }else{
      return false;
    }
}