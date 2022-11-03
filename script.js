let turnX = true

function play (num) {
    let html = document.getElementById(num)
    let status = document.getElementById('status')

    if (turnX) {
        html.innerHTML = "X";
        status.innerHTML = "O's Turn"
        turnX = false
    } else {
        html.innerHTML = "O";
        status.innerHTML = "X's Turn"
        turnX = true
    }

}

