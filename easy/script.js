

// Create two test arrays
let arr = [1, 2, 3, 4, 5, 6, 7]
let arr2 = [23, 34, 123, 5647, 3]
let arr3 = [10, 5]

// Declare variable for all added numbers
let addNums = 0;

//Create function that adds each number in the array
const numAvg = (a) => {

    // Iterate through each number in the array
    for (let i = 0; i < a.length; i++) {
        // Add current number to total
        addNums += a[i];

        //When last number is reached, return the median.
        if (i === a.length -1) {
            return console.log(`The average in this array is ${addNums/ a.length}`)
        }
        
    }
}

numAvg(arr3)