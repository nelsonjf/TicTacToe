// Global Variables //

let turnX = true
let xSqr = []
let oSqr = []
let turnNum = 0
let gameWon = false

// Basic game functionality //

function playGame (num) {
    let square = document.getElementById(num)
    let status = document.getElementById('status')


    // Place X or O on a square based on who's turn it is //
    if (gameWon === true) {
        return    
    } else if (square.className === "played") {
        status.innerHTML = "This spot is taken!"
    } else if (turnX) {
        square.innerHTML = "X";
        status.innerHTML = "O's Turn"
        turnX = false
        square.className = "played"
        xSqr.push(num)
        turnNum = turnNum + 1
    } else {
        square.innerHTML = "O";
        status.innerHTML = "X's Turn"
        turnX = true
        square.className = "played"
        oSqr.push(num)
        turnNum = turnNum + 1
    }

    // Check for a winner every turn //  
    if (
        xSqr.includes(1)&&xSqr.includes(2)&&xSqr.includes(3)||
        xSqr.includes(4)&&xSqr.includes(5)&&xSqr.includes(6)||
        xSqr.includes(7)&&xSqr.includes(8)&&xSqr.includes(9)||
        xSqr.includes(1)&&xSqr.includes(5)&&xSqr.includes(9)||
        xSqr.includes(7)&&xSqr.includes(5)&&xSqr.includes(3)|| 
        xSqr.includes(1)&&xSqr.includes(4)&&xSqr.includes(7)||
        xSqr.includes(2)&&xSqr.includes(5)&&xSqr.includes(8)||
        xSqr.includes(3)&&xSqr.includes(6)&&xSqr.includes(9)
    ) {
        status.innerHTML = "X Wins!"
        gameWon = true
    }
    
    if (
        oSqr.includes(1)&&oSqr.includes(2)&&oSqr.includes(3)||
        oSqr.includes(4)&&oSqr.includes(5)&&oSqr.includes(6)||
        oSqr.includes(7)&&oSqr.includes(8)&&oSqr.includes(9)||
        oSqr.includes(1)&&oSqr.includes(5)&&oSqr.includes(9)||
        oSqr.includes(7)&&oSqr.includes(5)&&oSqr.includes(3)||
        oSqr.includes(1)&&oSqr.includes(4)&&oSqr.includes(7)||
        oSqr.includes(2)&&oSqr.includes(5)&&oSqr.includes(8)||
        oSqr.includes(3)&&oSqr.includes(6)&&oSqr.includes(9)
    ) {
        status.innerHTML = "O Wins!"
        gameWon = true
    }

    // Tie check //
    if (turnNum === 9) {
        status.innerHTML = "Tie!"
    }
}


// "Restarts" the game //
function newGame () {
window.location.reload()
}