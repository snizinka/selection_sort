const array = [0, 3, 2, 10, 1, 4, -6, 8, 3];

function selection_sort(array) {
    let beenChanged = false;

    for (let i = 0; i < array.length; i++) {
        beenChanged = false;
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
                beenChanged = true;
            }
        }

        if (beenChanged) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }

    return array;
}

console.log(selection_sort(array));