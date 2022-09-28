var fib = function(n) {
    let firstNumber = 0;
    let secondNumber = 1;
    let thirdNumber;
    if(n === 0){
        return firstNumber;
    }else if(n === 1){
        return secondNumber;
    }else{
        for(let index = 2 ; index <= n ; index++){
            thirdNumber = firstNumber + secondNumber;
            firstNumber = secondNumber;
            secondNumber = thirdNumber;
        }
        return thirdNumber;
    }  
}