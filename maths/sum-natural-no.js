// Function with time complexity = O(n)

function sumNatural(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumNatural(3));


// Function with time complexity = O(1)

function sumOfNatural(n) {
    return (n * (n + 1)) / 2;
}

console.log(sumOfNatural(6));