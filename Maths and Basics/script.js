console.log("Maths and Basics");

// 1. Extract digits from a number and print them

function extractDigits(num) {
    let Number = num;

    while (Number > 0) {
        const lastDigit = Number % 10;
        console.log(lastDigit);
        Number = Math.floor(Number / 10);
    }
}

extractDigits(12345);

// T.C = O(log n) where n is the input number
// S.c = constants space for storing the last digit and the modified number. so, O(1)
