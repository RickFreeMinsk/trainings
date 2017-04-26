function search(array, condition) {
    let length = array.length,
        result;

    for (let i = 0; i < length; i++) {
        let item = array[i];
        if (condition.call(null, item, i, array)) {
            result = item;
            break;
        }
    }

    if (result) {
        return result;
    } else {
        console.log('No match for condition');
    }
}

let result = search([1, 31, 3, 7, 2, 15, 4, 78, 45, 9], function (item) {
    return item > 31 && item < 70;
});
console.log(result);