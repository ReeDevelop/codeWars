

function oddOrEven(array) {
    if(array[0] == null){
      return "even"
    }else if(array.reduce((acc, cur) => acc + cur) % 2 === 0){
      return "even"
    }else{
      return "odd"
    }
}