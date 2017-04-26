function map(array, callback) {
    let newArray = [],
        length = array.length;

    if (typeof callback !== 'function') {
        console.log('callback is not a function!');
        return;
    }

    for (let i = 0; i < length; i++) {
        let item = array[i];
        newArray.push(callback(item, i, array));
    }

    return newArray;
}

let newArray = map([1, 31, 3, 7, 2, 15, 4, 78, 45, 9], Math.sqrt);
console.log(newArray);