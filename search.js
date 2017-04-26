function search(array, condition) {
    let length = array.length,
        result = null;

    for (let i = 0; i < length; i++) {
        let item = array[i];
        if (condition(item, i, array)) {
            result = item;
            break;
        }
    }

    return result;
}

let result = search([1, 31, 3, 7, 2, 15, 4, 78, 45, 9], function (item) {
    return item > 10;
});
console.log(result);