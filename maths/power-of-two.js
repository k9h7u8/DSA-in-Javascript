// Big O = O(log n)

function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 != 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(6));


// Big O = O(1)

function isPowerOfTwoBitwise(n) {
    if (n < 1) {
        return false;
    }

    return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitwise(5));
console.log(isPowerOfTwoBitwise(8));