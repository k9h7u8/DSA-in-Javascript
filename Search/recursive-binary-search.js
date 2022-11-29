// Big O = O(logn)
function binarySearch(arr, key) {
    return search(arr, key, 0, arr.length - 1);
}

function search(arr, key, beg, end) {
    if (beg > end) {
        return -1;
    }
    let mid = Math.floor((beg + end) / 2);
    if (arr[mid] === key) {
        return mid;
    }
    else if (arr[mid] > key) {
        return search(arr, key, beg, mid - 1);
    }
    else {
        return search(arr, key, mid + 1, end);
    }
}

console.log(binarySearch([1, 2, 3, 4], 4));
console.log(binarySearch([1, 2, 3, 4], -1));