console.log("LINK TEST")

let turnX = true

function testFunc (num) {
    let html = document.getElementById(num)

    if (turnX) {
        html.innerHTML = "X";
        turnX = false
    } else {
        html.innerHTML = "O";
        turnX = true
    }

}
