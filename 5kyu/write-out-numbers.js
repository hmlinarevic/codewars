function number2words(n) {
    // works for numbers between 0 and 999999

    const map = {
        0: "",

        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",

        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eightteen",
        19: "nineteen",

        20: "twenty",
        30: "thirty",
        40: "fourty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eightty",
        90: "ninety",
    };

    const processThreeNumbers = (numList) => {
        let a, b, c;
        a = numList[0];
        b = numList[1];
        c = numList[2];

        let string = "";
        if (numList.length === 3) {
            // console.log({ a, b, c });
            string += map[a];
            string += a == 0 ? "" : " hundred ";
            string += b == 0 ? "" : map[b == 1 ? `1${c}` : `${b}0`];
            string += b > 1 && c != 0 ? "-" : "";
            string += b != 1 ? map[c] : "";
        }

        if (numList.length === 2) {
            string += map[a == 1 ? `1${b}` : a];
            string += a > 1 ? "-" : "";
            string += a != 1 ? map[b] : "";
        }

        if (numList.length === 1) {
            string += a == 0 ? "zero" : map[a];
        }

        console.log({ string });
        return string;
    };

    const splitInputNumber = (inputNumber) => {
        const a = [];
        const b = [];
        const c = inputNumber.toString().split("").reverse();

        for (let i = 0; i < c.length; i++) {
            if (i > 2) {
                a.push(c[i]);
            } else {
                b.push(c[i]);
            }
        }

        a.reverse();
        b.reverse();

        return [a, b];
    };

    const [a, b] = splitInputNumber(n);

    if (a.length + b.length > 3) {
        return `${processThreeNumbers(a)} thousand ${processThreeNumbers(b)}`;
    } else {
        return processThreeNumbers(b);
    }
}

// console.log(number2words(1003));
// console.log(number2words(193));
console.log(number2words(33));
console.log(number2words(903833));
