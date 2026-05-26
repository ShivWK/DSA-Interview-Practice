console.log("Sorting Algorithms");

// 1. Selection Sort

function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < (n - 1); i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    console.log("Selection Sorted Array", arr)
}

// selectionSort([12, 2, 15, 8, 20, 80, 1, 0]);
// T.C = O(n^2)
// S.C = O(1)

// 2. Insertion Sort

function insertionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let j = i;

        while (j > 0 && arr[j - 1] > arr[j]) {
            const temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }

    console.log("Insertion Sorted Array", arr);
}

// insertionSort([12, 2, 15, 8, 20, 80, 1, 0]);
// T.C = O(n^2)
// S.C = O(1)

// 3. Bubble Sort

function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j + 1] < arr[j]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log("Bubble Sorted Array", arr);
}

// bubbleSort([12, 2, 15, 8, 20, 80, 1, 0]);
// T.C = O(n^2)
// S.C = O(1)