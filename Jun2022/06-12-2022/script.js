function openOrSenior(data){
    return data.map(function(element) {
        if(element[0] >= 55 && element[1] > 7){
            return "Senior"
        }else{
            return "Open"
        }
    })
}