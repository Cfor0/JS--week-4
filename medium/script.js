// Create arr for testing

const arr = [4,5,6,7,0,1,2]


// Create function that takes in a value and returns the index of the value in the array.
const searchArr = (a) => {
    // Create for loop to search array for the argument value
    for(let i = 0; i < arr.length; i++) {
        if(a === arr[i]) {
            return console.log(`Your value is in the ${arr.indexOf(a)} spot of the array.`)
        } else if(a != arr[i] && i === arr.length-1) {
            return console.log(`-1`)
        } 
    }
}

//Call function with value to find
searchArr(7);