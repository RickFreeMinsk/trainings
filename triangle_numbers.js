 let countFactors = (number) => {
    let factor = 2,
        count = 1;

    if (number === 1) {
        return 1;
    } else {
        for (factor; factor <= number / 2; factor++) {
            if (number % factor === 0) {
                count++;
            }
        }
    }

    return count + 1;
 };

 let generateNumber = (number) => number * (number + 1) / 2;

function findNumber (n) {
    let factors = 0,
        triangleNumber = 0;

    const FACTORS_BOUNDARY = 500;

    while (factors < FACTORS_BOUNDARY) {
        triangleNumber = generateNumber(n);
        if (triangleNumber % 10 === 0) {
            factors = countFactors(triangleNumber);
        }
        n++;
    }

    return triangleNumber;
}

let firstTriangle = findNumber(10000);
console.log(firstTriangle);