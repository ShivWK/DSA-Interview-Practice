console.log("Arrays");

// 1. Find number of occurrences of an element in an array

function countOccurrences(arr) {
    const n = Math.max(...arr) + 1;
    const hashArray = new Array(n).fill(0);

    for (let i = 0; i < arr.length; i++) {
       hashArray[arr[i]] += 1;
    }

    return hashArray;
}

const arr = [1, 2, 3, 2, 4, 1, 5];
const occurrences = countOccurrences(arr);
console.log("Occurrences of elements in the array:", occurrences);