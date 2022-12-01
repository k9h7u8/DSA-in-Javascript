//Big O = O(nm)

function cartesianProduct(arrA, arrB) {
    let result = [];
    for (let i = 0; i < arrA.length; i++) {
        for (let j = 0; j < arrB.length; j++) {
            result.push([arrA[i], arrB[j]]);
        }
    }
    return result;
}

const arrA = [1, 2];
const arrB = [3, 4];
console.log(cartesianProduct(arrA, arrB));
