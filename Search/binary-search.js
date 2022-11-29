// Big O = O(logn)
function binarySearch(arr, key) {
    let beg = 0;
    let end = arr.length - 1;
    while (beg <= end) {
        let mid = Math.floor((beg + end) / 2);
        if (arr[mid] === key) {
            return mid;
        }
        else if (arr[mid] > key) {
            end = mid - 1;
        }
        else {
            beg = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4], 4));
