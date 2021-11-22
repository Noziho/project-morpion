let player1 = false;
let player2 = false;
const CLICK_LEFT = 0;
const CLICK_RIGHT = 2;
let cases = document.getElementsByClassName("size");


document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

for (const square of cases) {
    square.addEventListener('mouseup', function (event){
        switch (event.button) {
            case CLICK_LEFT:
                crossOrCircle(this, "X");
                break;

            case CLICK_RIGHT:
                crossOrCircle(this, "O");
                break;

        }
        checkCases();
    })
}


function checkCases () {
    player1 = horizontal("X");
    player2 = horizontal("O");
    if (!player1 && !player2) {
        player1 = vertical("X");
        player2 = vertical("O");
        if (!player1 && !player2) {
            player1 = diagonal("X");
            player2 = diagonal("O");

        }
    }
    if (player1){
        alert("Player1 win !");
    }
    else if (player2) {
        alert("Player2 win !")
    }
}

function horizontal (player) {
    for (let i = 0; i <= 8; i +=3) {
        if (cases[i].innerHTML === player && cases[i+1].innerHTML === player && cases[i+2].innerHTML === player) {
            return true;
        }
    }
    return false;
}

function vertical (player) {
    for (let i = 0; i <= 2; i++) {
        if (cases[i].innerHTML === player && cases[i+3].innerHTML === player && cases[i+6].innerHTML === player) {
            return true;
        }
    }
    return false;
}

function diagonal (player) {
    for (let i = 0; i <= 2; i++) {
        if (cases[0].innerHTML === player && cases[4].innerHTML === player && cases[8].innerHTML === player) {
            return true;
        }
        else if (cases[2].innerHTML === player && cases[4].innerHTML === player && cases[6].innerHTML === player) {
            return true;
        }
    }
    return false;
}

function crossOrCircle (element, playerChar) {
    if (!player1 && !player2) {
        if (element.innerHTML.length === 0) {
            element.innerHTML = playerChar;
        }
    }
}



