function filter(array, callback) {
    let filteredArray = [],
        length = array.length;

    if (typeof callback !== 'function') {
        console.log('callback is not a function!!');
        return;
    }

    for (let i = 0; i < length; i++) {
        let item = array[i];
        if (callback(item, i, array)) {
            filteredArray.push(item);
        }
    }

    return filteredArray;
}

let filtered = filter([1, 31, 3, 7, 2, 15, 4, 78, 45, 9], function (item, i, array) {
    return item > 20;
});
console.log(filtered);