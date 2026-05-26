console.log("Maths and Basics");

// 1. Extract digits from a number and print them

function extractDigits(num) {
    let Number = num;

    console.log("Digits in the number:");
    while (Number > 0) {
        const lastDigit = Number % 10;
        console.log(lastDigit);
        Number = Math.floor(Number / 10);
    }
}

extractDigits(12345);

// T.C = O(log n) where n is the input number
// S.c = constants space for storing the last digit and the modified number. so, O(1)

// 2. Reverse a number

function reverseNumber(num) {
    let Number = num;
    let reversed = 0;

    while (Number > 0) {
        const lastDigit = Number % 10;
        reversed = reversed * 10 + lastDigit;
        Number = Math.floor(Number / 10);
    }

    console.log("Reversed number:", reversed);
}

reverseNumber(12345);

// T.C = O(log n) where n is the input number
// S.C = O(1) as we are using constant space to store the reversed number and the modified number.
