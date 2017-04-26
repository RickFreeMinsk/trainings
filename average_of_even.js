function averageOfEven(array) {
    return array.filter((item) => {
        if (typeof item === 'number')
            return item % 2 === 0;
    }).reduce((a, b) => {
        return a + b;
    })
}

console.log(averageOfEven([1, 21, 3, 6, 8]));

