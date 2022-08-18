//1. loop over all elements in an array
// function takes in an array

function recursiveBubbleSort(arr, count=0){
    // base case
    if (count>=arr.length){
        return arr
    }
    else {
        //start at index zero, loop through each index
        //3. repeat 1&2 until all elements are sorted
        for(let i=0; i<arr.length; i++){
            if(arr[i]>arr[i+1]){
                //2. if adjacent elements are out of order, swap them
                // make a temp variable to store the value we will swap
                let temp = arr[i]
                // set current element to value of next element
                arr[i] = arr[i+1]
                // set next element to value of current element (as stored in temp)
                arr[i+1] = temp
            }
            console.log(`i: ${i}`)
        }
        count+=1
        // return the original array, sorted
        return recursiveBubbleSort(arr,count)
    }

}

module.exports = recursiveBubbleSort