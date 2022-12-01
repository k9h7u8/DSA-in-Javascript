//Worst case - Big O = O(n^2) - when array is sorted
//Average case - Big O = O(nLogn)

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [-2, -6, 8, 20, 4]
console.log(quickSort(arr));