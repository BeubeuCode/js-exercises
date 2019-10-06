//Exo 10

let arrSentence = [];

function addWord() {
    arrSentence.push(document.getElementById("wordInput").value);
    console.log(arrSentence);
    arrSentence.forEach(displayWords);
}



function displayWords(item, index) {
    document.getElementById("sentence").innerHTML += item;
}

function clearSentence() {
    arrSentence.length = 0;
    document.getElementById("sentence").innerHTML = "";
}

//Exo 11 : 

let oddsRaw = Math.random() * (20 - 0.1) + 0.1;
let odds = oddsRaw.toFixed(2);
let sumBet = 0;
let gains = 0;

function bet() {
    sumBet = document.getElementById("betInput").value;
    gainsRaw = eval(sumBet + " * " + odds);
    gains = gainsRaw.toFixed(2);
    document.getElementById("gains").innerHTML = "You won : " + gains;
}

function generateOdds() {
    odds = Math.random() * (20 - 0.1) + 0.1;
    odds = odds.toFixed(2);
}

//Exo 13

function printWindowSize() {
    document.getElementById("dims").innerHTML = window.innerWidth;
}

window.onresize = printWindowSize;

//Exo 15

function fizzbuzz() {
    let prmpt = prompt("Entrez un entier : ");
    let nmbre = parseInt(prmpt);
    if(nmbre % 3 === 0) {
        alert("Ce nombre est un multiple de 3");
    }
    if(nmbre % 7 === 0) {
        alert("Ce nombre est un multiple de 7")
    }
    if(nmbre % 7 !== 0 && nmbre % 3 !== 0) {
        alert("Ce nombre n'est ni un multiple de 3, ni un multiple de 7");
    }
}

