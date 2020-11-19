// Do Stuff Here
const red = document.getElementById("turnRed");
const white = document.getElementById("turnWhite");

window.updateTheBackground = function (className) {

    red.addEventListener('click', () => {
        document.getElementById("body").classList.replace('bg-white', 'bg-red')
    })
    white.addEventListener('click', () => {
        document.getElementById("body").classList.replace('bg-red', 'bg-white')
    })
    
}

updateTheBackground()






