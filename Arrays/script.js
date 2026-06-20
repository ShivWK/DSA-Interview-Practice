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

// 5: Left rotate elements by n places
// [1, 2, 3, 5, 4] => [3, 5, 4, 5, 4] => [3, 5, 4, 1, 2]

// [2, 1, 3, 5, 4] => [2, 1, 4, 5, 3] => [3, 4, 5, 1, 2]

// Brute force

function rotateTheArray(arr, n) {
    let length = arr.length;

    if (length <= 1) return arr;

    const initialValues = arr.slice(0, n); // O(n)

    for (let i = n; i < length; i++) {
        arr[i - n] = arr[i];
    } // O(length - n)

    let j = 0
    for (let i = length - n; i < length; i++) {
        arr[i] = initialValues[i - (length - n)]
        j++;
    } // O(n)

    return arr;
}

// console.log(rotateTheArray([1, 2, 3, 5, 4], 2));
// T.C = O(n + length - n + n) = O(length + n);
// S.c = o(n)

// Optimal Solution

function reverseTheArray(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

function rotateTheArray2(arr, n) {
    let length = arr.length;
    if (length <= 1) return arr;

    n = n % length;
    if (n === 0) return arr;

    reverseTheArray(arr, 0, n - 1); // O(n/2)
    reverseTheArray(arr, n, length - 1); // O(length - n)/2
    reverseTheArray(arr, 0, length - 1) // O(length)

    return arr;
}

// console.log(rotateTheArray2([1, 2, 3, 5, 4], 2));
// t.c = n/2 + (length - n)/2 + length/2
// t.c = (n + length - n + length)/2 
// t.c = length
//S.C = O(1)

// 6: Move zeros to end

// Brute Force
function moveZeros(arr) {
    const n = arr.length;

    if (n <= 1) return arr;
    const temp = [];

    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            temp.push(arr[i])
        }
    }

    for (let i = 0; i < temp.length; i++) {
        arr[i] = temp[i]
    }

    for (let i = temp.length; i < n; i++) {
        arr[i] = 0;
    }

    return arr;
}

// console.log(moveZeros([1, 0, 5, 0, 3, 6, 9, 7, 0, 5, 0, 4, 0]));

// T.C = O(n) + O(n) + O(n) = o(3n) = O(n)
// S.c = O(n)

// Optimal
function moveZeros2(arr) {
    const n = arr.length;

    if (n <= 1) return arr;
    let tempIndex = -1;

    // get the first index whose value is 0
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            tempIndex = i;
            break;
        }
    } // O(n)

    if (tempIndex === -1) return arr;

    // swap the non zero with zero
    for (let i = tempIndex + 1; i < n; i++) {
        if (arr[i] !== 0) {
            arr[tempIndex] = arr[i];
            arr[i] = 0

            tempIndex++;
        }
    } // O(n - 1)

    return arr;
}

// console.log(moveZeros2([1, 0, 5, 0, 3, 6, 9, 7, 0, 5, 0, 4, 5]));

// T.C = O(n) + O(n - 1) = O(n + n - 1) = O(2n - 1) = O(n)
// S.C = O(1)

// 7: Remove duplicates from the array

// Brute force
function removeDuplicate(arr) {
    const n = arr.length;
    if (n <= 1) return arr;

    const uniqueElements = new Set();

    for (let i = 0; i < n; i++) {
        uniqueElements.add(arr[i]);
    } // O(n)

    let i = 0;
    for (const value of uniqueElements) {
        arr[i] = value;
        i++;
    } // O(n)

    return { arr, size: uniqueElements.size }
}

// console.log(removeDuplicate([1,1,2,2,3,4,5,5]));

// T.C: O(n) + O(n) = O(2n) = O(n)
// S.C: O(n)

// Optimal
function removeDuplicate2(arr) {
    const n = arr.length;
    if (n <= 1) return arr;

    let i = 0;

    for (let j = 1; j < n; j++) {
        if (arr[i] !== arr[j]) {
            arr[i + 1] = arr[j];
            i++
        }
    } // O(n - 1)

    return { arr, size: (i + 1) }
}

// console.log(removeDuplicate2([1,1,2,2,3,4,5,5]));

// T.C: O(n - 1) = O(n)
// S.C: O(1)

// 9: Union two arrays

// Brute force
function unionArrays(arr1, arr2) {
    const len1 = arr1.length;
    const len2 = arr2.length;

    if (len1 === 0 || len2 === 0) return [];

    const uniqueElements = new Set(); // O(len1 + len2)
    const newArray = [] // O(len1 + len2)

    for (let i = 0; i < len1; i++) {
        uniqueElements.add(arr1[i])
    } // O(len1)

    for (let i = 0; i < len2; i++) {
        uniqueElements.add(arr2[i])
    } // O(len2)

    for (const value of uniqueElements) {
        newArray.push(value);
    } // O(len1 + len2)

    return newArray;
}

console.log(unionArrays([1, 2, 5, 7, 7, 8], [1, 2, 5, 8, 9, 9]))

// T.C: O(len1 + len2) + O(len1) + O(len2) = O(len1 + len2)
// S.C: O(len1 + len2)

// Optimal

function unionArrays2(arr1, arr2) {
    const len1 = arr1.length;
    const len2 = arr2.length;

    if (len1 === 0 && len2 === 0) return [];

    const newArray = [];
    let i = 0;
    let j = 0;

    while (i < len1 && j < len2) {
        if (arr1[i] <= arr2[j]) {
            if (newArray.length === 0 || newArray[newArray.length - 1] !== arr1[i]) {
                newArray.push(arr1[i]);
            }

            i++;
        } else {
            if (newArray.length === 0 || newArray[newArray.length - 1] !== arr2[j]) {
                newArray.push(arr2[j]);
            }

            j++;
        }
    }

    while (i < len1) {
        if (newArray[newArray.length - 1] !== arr1[i]) {
            newArray.push(arr1[i]);
        }

        i++;
    }

    while (j < len2) {
        if (newArray[newArray.length - 1] !== arr2[j]) {
            newArray.push(arr2[j]);
        }

        j++;
    }

    return newArray;
}

console.log(unionArrays2([1, 2, 5, 7, 7, 8], [1, 2, 5, 8, 9, 9]))

// T.C: O(len1 + len2)
// S.C: O(len1 + len2)