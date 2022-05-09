function getMiddle(s){
    if(s.length <= 2){
      return s;
    }else{
      if(s.length % 2 == 0){
        let holder = s
        while(holder.length > 2){
          return holder.split("").shift().pop().join("");
        }
      }else if(s.length % 2 == 1){
        let holder2 = s
        while(holder2.length > 1){
          return holder2.split("").shift().pop().join("");
        }
      }
    }