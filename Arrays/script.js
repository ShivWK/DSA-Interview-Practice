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
// const occurrences = countOccurrences(arr);
// console.log("Occurrences of elements in the array:", occurrences);

// T.C = O(m + k) {
//     m = length of Array
//     k = max element in the Array;

//     then Math.max(...arr) 
//     traverse whole array O(m),

//     new Array(n).fill(0) 
//     fill array of size (k + 1)
//     so O(k + !);

//     and the loop 
//     O(m)

//     so, T.C = O(m + k + m + 1) = O(2m + k + 1) = O(m + k)
// }
// S.C = O(k) {k is max element in the array}

// 1. find the maximum and minimum element in an array

function findMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = ar[i];
        }
    }

    return { max, min };
}

// const { max, min } = findMaxMin(arr);
// console.log("Maximum element in the array:", max);
// console.log("Minimum element in the array:", min);

// T.C = O(n)
// S.C = O(1) 

// 3. Find the second largest element in an array

function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }

    return secondLargest !== -Infinity ? secondLargest : -1;;
}

// const value = findSecondLargest([6]);
// console.log("Second Largest", value);

// T.C = O(n)
// S.C = O(1) 


// 4. Find second smallest element

function findSecondSmallest(arr) {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] > smallest && arr[i] < secondSmallest) {
            secondSmallest = arr[i];
        }
    } 

    return secondSmallest !== Infinity ? secondSmallest : -1;
}

// const value = findSecondSmallest([]);
// console.log("Second Largest", value);

// T.C = O(n)
// S.C = O(1) 