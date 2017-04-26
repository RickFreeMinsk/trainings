function quicksort(array, low, high) {
    let pivot;
    if (low < high) {
        pivot = partition(array, low, high);
        quicksort(array, low, pivot - 1);
        quicksort(array, pivot + 1, high);
    }
}

function partition(array, low, high) {
    let pivot = array[high],
        i = low - 1,
        additional;
    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            additional = array[i];
            array[i] = array[j];
            array[j] = additional;
        }
    }
    additional = array[i + 1];
    array[i + 1] = array[high];
    array[high] = additional;
    return i + 1;
}

let a = [1, 31, 3, 7, 2, 15, 4, 78, 45, 9];
quicksort(a, 0, a.length - 1);
console.log(a);