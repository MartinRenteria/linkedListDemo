function firstBadVerison(array) {
    for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
        if(array[j] > array[j+1]) {
            const temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
            }
        }
    }
    return array;
}

console.log(firstBadVerison([1, 2, 3, 4, 5]))