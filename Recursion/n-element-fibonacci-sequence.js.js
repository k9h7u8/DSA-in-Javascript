// Big O = O(2^n)
function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Fibonacci Sequence: 0 1 1 2 3 5 8 13
console.log(fibonacci(5));
console.log(fibonacci(7));
