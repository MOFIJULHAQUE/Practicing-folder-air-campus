function curry(f) { 
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}

// usage
function sum(a, b) {
    return a + b;
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2)); // 3