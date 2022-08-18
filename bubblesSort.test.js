// import bubble sort
const bubbleSort = require('./bubbleSort.js')

describe('Bubble sort', () => {
    // sorts an empty array
    it('sort empty array', ()=> {
        expect(bubbleSort([])).toEqual([]);
    })

    // sorts an array of one element
    it('sort one element array', ()=> {
        expect(bubbleSort([55])).toEqual([55]);
    })

    // sorts an array of many elements
    it('sort many element array', ()=> {
        expect(bubbleSort([89,12,98,-11,40,5,26])).toEqual([-11,5,12,26,40,89,98]);
    })
})