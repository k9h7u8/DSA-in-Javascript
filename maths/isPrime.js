// Function with time complexity = O(n)
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(1));
console.log(isPrime(7));

// Function with time complexity = O(sqrt(n))
function isPrimeNo(n) {
    if (n < 2) {
        return false;
    }
    // for (let i = 2; i <n; i++) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrimeNo(4));
console.log(isPrimeNo(5));