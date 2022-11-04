let turnX = true

function playGame (num) {
    let square = document.getElementById(num)
    let status = document.getElementById('status')

    if (square.className === "played") {
        status.innerHTML = "This spot is taken!"

    } else if (turnX) {
        square.innerHTML = "X";
        status.innerHTML = "O's Turn"
        turnX = false
        square.className = "played"

    } else {
        square.innerHTML = "O";
        status.innerHTML = "X's Turn"
        turnX = true
        square.className = "played"
    }
}

