var isPowerOfThree = function(n) {
    if(n === 1){
        return true;
    }
    if(n === 0){
        return false;
    }
    if(n < 0){
        return false;
    }
    let product = 1;
    while(product < n){
        product = product * 3;
        if(product === n){
            return true;
        }else if(product > n){
            return false;
        }
    }   
}