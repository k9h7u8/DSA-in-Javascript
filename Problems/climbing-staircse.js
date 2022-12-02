// Big O = O(n)

function climbStareCase(n) {
    const nowOfWays = [1, 2];
    for (let i = 2; i <= n; i++) {
        nowOfWays[i] = nowOfWays[i - 1] + nowOfWays[i - 2];
    }

    return nowOfWays[n - 1];
}

console.log(climbStareCase(1));
console.log(climbStareCase(3));
console.log(climbStareCase(4));