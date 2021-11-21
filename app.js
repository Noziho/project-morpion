
document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

let div1 = document.getElementById("d1");
let div2 = document.getElementById("d2");
let div3 = document.getElementById("d3");
let div4 = document.getElementById("d4");
let div5 = document.getElementById("d5");
let div6 = document.getElementById("d6");
let div7 = document.getElementById("d7");
let div8 = document.getElementById("d8");
let div9 = document.getElementById("d9");


function CrossOrCircle (div, type, text) {

    let createP = document.createElement("p");
    div.addEventListener(type, function (){
        createP.innerHTML = text;
        createP.style.fontSize = "10rem";
        div.append(createP);



    })
}



CrossOrCircle (div1, "click", "X");
CrossOrCircle (div1, "auxclick", "O");
if (div1.innerHTML === "O" && div2.innerHTML === "O" && div3.innerHTML === "O") {
    alert("sa marche");
}

CrossOrCircle (div2, "click", "X");
CrossOrCircle (div2, "auxclick", "O");

CrossOrCircle (div3, "click", "X");
CrossOrCircle (div3, "auxclick", "O");

CrossOrCircle (div4, "click", "X");
CrossOrCircle (div4, "auxclick", "O");

CrossOrCircle (div5, "click", "X");
CrossOrCircle (div5, "auxclick", "O");

CrossOrCircle (div6, "click", "X");
CrossOrCircle (div6, "auxclick", "O");

CrossOrCircle (div7, "click", "X");
CrossOrCircle (div7, "auxclick", "O");

CrossOrCircle (div8, "click", "X");
CrossOrCircle (div8, "auxclick", "O");

CrossOrCircle (div9, "click", "X");
CrossOrCircle (div9, "auxclick", "O");


