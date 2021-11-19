
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


function CrossOrCercle (div, type, srcIMG) {
    let createIMG = document.createElement("img");
    div.addEventListener(type, function (){
        createIMG.src = srcIMG;
        div.append(createIMG);
    })
}

CrossOrCercle (div1, "click", "cross.png");
CrossOrCercle (div1, "auxclick", "rond.svg.png");

CrossOrCercle (div2, "click", "cross.png");
CrossOrCercle (div2, "auxclick", "rond.svg.png");

CrossOrCercle (div3, "click", "cross.png");
CrossOrCercle (div3, "auxclick", "rond.svg.png");

CrossOrCercle (div4, "click", "cross.png");
CrossOrCercle (div4, "auxclick", "rond.svg.png");

CrossOrCercle (div5, "click", "cross.png");
CrossOrCercle (div5, "auxclick", "rond.svg.png");

CrossOrCercle (div6, "click", "cross.png");
CrossOrCercle (div6, "auxclick", "rond.svg.png");

CrossOrCercle (div7, "click", "cross.png");
CrossOrCercle (div7, "auxclick", "rond.svg.png");

CrossOrCercle (div8, "click", "cross.png");
CrossOrCercle (div8, "auxclick", "rond.svg.png");

CrossOrCercle (div9, "click", "cross.png");
CrossOrCercle (div9, "auxclick", "rond.svg.png");

