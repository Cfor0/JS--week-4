// Do Stuff Here
const red = document.getElementById("turnRed");
const white = document.getElementById("turnWhite");

window.updateTheBackground = function (className) {
    

    red.addEventListener('click', (className) => {
        console.log(document.getElementById("body").classList.replace('bg-white', 'bg-red'))
    })
    white.addEventListener('click', (className) => {
        console.log(document.getElementById("body").classList.replace('bg-red', 'bg-white'))
    })
    
}

updateTheBackground()






