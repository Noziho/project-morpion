let player1 = false;
let player2 = false;
let lastPlayerIsX = 0;
let lastPlayerIsO = 0;
let hitCounter = 0;
let cases = document.getElementsByClassName("size");
let winner = document.getElementById("winner");

<!-- Delete default comportment for right click on all page. -->
document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

<!-- Loop 'for' for add an addEventListener on all div, for print X or O and check up all conditions with different function -->
for (let i = 0; i < cases.length; i++) {
    cases[i].addEventListener('mouseup', function (event){
        switch (event.button) {
            case 0:
                if (lastPlayerIsX === 0) {
                    crossOrCircle(this, "X");
                    lastPlayerIsX = 1;
                    lastPlayerIsO = 0;
                    hitCounter++;
                }
                break;


            case 2:
                if(lastPlayerIsO === 0) {
                    crossOrCircle(this, "O");
                    lastPlayerIsX = 0;
                    lastPlayerIsO = 1;
                    hitCounter++;
                }
                break;


        }

        checkCases();
        equality();
    })
}


<!-- Function for checking case with horizontal/vertical/diagonal function -->
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
        winner.innerHTML = "Player1 win !";
    }
    else if (player2) {
        winner.innerHTML = "Player2 win !";
    }
}

<!-- Check up for horizontal cases, if 3 cases have the same content it's true. Else it's false -->
function horizontal (player) {
    for (let i = 0; i <= 8; i +=3) {
        if (cases[i].innerHTML === player && cases[i+1].innerHTML === player && cases[i+2].innerHTML === player) {
            return true;
        }
    }
    return false;
}

<!-- Check up for vertical cases, if 3 cases vertical have the same content it's true. Else it's false -->
function vertical (player) {
    for (let i = 0; i <= 2; i++) {
        if (cases[i].innerHTML === player && cases[i+3].innerHTML === player && cases[i+6].innerHTML === player) {
            return true;
        }
    }
    return false;
}

<!-- Check up for diagonal cases, if 3 diagonal cases have the same content it's true. Else it's false -->
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

<!-- Check up equality, if all cases are completed print "égalité" -->
function equality () {
    if (!player1 && !player2 && hitCounter === 9) {
        winner.innerHTML = "Egalité";
    }
}

<!-- print a X or O in differents cases when the player click right or left -->
function crossOrCircle (element, playerChar) {
    if (!player1 && !player2) {
        if (element.innerHTML.length === 0) {
            element.innerHTML = playerChar;
        }
    }
}





