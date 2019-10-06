//On cache toutes les alertes

$(".alert").hide();
$(".alert").alert();

let userInput = document.getElementById("question");
let dispCharCount = document.getElementById("charCount");
let button = document.getElementById("click");

function displayCharCount() {
    let a = userInput.value.length;
    dispCharCount.innerHTML = a;
}

userInput.oninput = displayCharCount;

function checkCharCount() {
    if(userInput.value.length < 10) {
        $("#alertTooMuchChars").show();
    } else {
       slideIn();
    }
}

function slideIn() {
    document.getElementById("firstSlide").style.transition = "1s ease"
    document.getElementById("firstSlide").classList.add("paddingDeOuf");
}

function slideOut() {
    document.getElementById("firstSlide").classList.remove("paddingDeOuf");
}

button.onclick = checkCharCount;

$(".alert").hide();
$(".alert").alert();

