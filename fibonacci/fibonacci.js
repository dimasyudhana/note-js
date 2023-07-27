function fibonacciNumber(number) {
    if(number === 0) {
        return 0;
    } else if (number === 1) {
        return 1;
    }
    return fibonacciNumber(number - 1) + fibonacciNumber(number - 2);
}

function fibonacciArray(index) {
    const arrayFibonacci = [];
    for(let i = 0; i <= index; i++) {
        arrayFibonacci.push(fibonacciNumber(i));
    }
    return arrayFibonacci[index];
}

console.log(fibonacciArray(0)); // 0 
console.log(fibonacciArray(2)); // 1
console.log(fibonacciArray(9)); // 34
console.log(fibonacciArray(10)); // 55