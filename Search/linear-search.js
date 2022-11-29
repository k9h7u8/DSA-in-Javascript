// Big O = O(n)
function linearSearch(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5, 6];
key1 = 5;
key2 = 9;
console.log(linearSearch(arr, key1));
console.log(linearSearch(arr, key2));
