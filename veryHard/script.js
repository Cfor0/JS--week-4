// Create coins array
let coins = [1, 2, 5]

// Create function that takes one argument amount
function amount(a) {

    // Sort array in ascending order
    coins.sort(function (a, b) { return a - b });

    // Check each element with modulus to check for remainders
    let perfNum = new Array;
    let notPerf = new Array;
    coins.forEach(ele => {
        if (a % ele === 0) {
            perfNum.push(ele);
        } else {
            notPerf.push(ele)
        }
    })
    console.log(perfNum)

    notPerfect(notPerf, a, perfNum)


}

function notPerfect(notPerf, a, perfNum) {
    // Sort array in descending order
    notPerf.sort(function (a, b) { return b - a });

    // Get the highest value coin
    let value = notPerf.shift()
    // console.log(value)

    // Get the remainder from the highest value coin
    let lowestRemainder = Math.floor(a / value);
    // console.log(lowestRemainder)

    checkAmount(value, lowestRemainder, perfNum, notPerf, a)

}

// Check the final remainder to a 
function checkAmount(value, lowestRemainder, perfNum, notPerf, a) {

    // Get the closest number of coins so far
    let almostNum = value * lowestRemainder;

    // Get remainder of the closest coins to the main value
    let lastRemainder = a % almostNum;
    // console.log(lastRemainder)

    // Create variable if no solution
    let noSolution = false;

    // Iterate through the global coin array and filter the same numbers out
    for (let i = 0; i < coins.length; i++) {
        if (notPerf.includes(coins[i])) {
            // console.log(`Same number`)
        }
        // push remainding remainders to notPerf arr
        else if (coins[i] <= lastRemainder) {
            notPerf.push(coins[i])
        }
    }

    // console.log(notPerf)

    // Create variable for notPerf array
    let notPerfCheck = 0;

    // Check for first solution if coins array has the remaining number amount
    if (coins.includes(lastRemainder)) {
        return console.log(lowestRemainder + 1)
    }
    // Iterate through notPerf array(remaining numbers) and add them together to match the remainder
    else {
        for (let i = 0; i < notPerf.length; i++) {
            notPerfCheck += notPerf[i]
            // console.log(notPerfCheck)
            
            // Check to see if they add up to the lastRemainder and return number of coins it took
            if (notPerfCheck === lastRemainder) {
                return console.log(lowestRemainder + notPerf.length)
            }
            else if (notPerf.length + 1 === notPerf[i]) {
                noSolution = true;
                if (noSolution === true) {
                    console.log(`-1`)
                }
            }
        }
    }
}

amount(11)


