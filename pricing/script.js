let slider = document.getElementById("priceRange");
let freeButton = document.getElementById("freePlan");
let mediumButton = document.getElementById("mediumPlan");
let expensiveButton = document.getElementById("higherPlan");

function sliderChange() {
    console.log(slider.value);
    document.getElementById("priceSelected").innerHTML = slider.value + "€"
    if(slider.value <= 10) {
        mediumButton.classList.remove("btn-primary");
        mediumButton.classList.add("btn-disabled");
        expensiveButton.classList.remove("btn-primary");
        expensiveButton.classList.add("btn-disabled");
        if(freeButton.classList.contains("btn-disabled")) {
            freeButton.classList.remove("btn-disabled");
            freeButton.classList.add("btn-primary");
        }
    } else if (slider.value > 10 && slider.value <= 50) {
        freeButton.classList.remove("btn-primary");
        freeButton.classList.add("btn-disabled");
        expensiveButton.classList.remove("btn-primary");
        expensiveButton.classList.add("btn-disabled");
        if(mediumButton.classList.contains("btn-disabled")) {
            mediumButton.classList.remove("btn-disabled");
            mediumButton.classList.add("btn-primary");
        }
    } else if(slider.value > 50) {
        mediumButton.classList.remove("btn-primary");
        mediumButton.classList.add("btn-disabled");
        freeButton.classList.remove("btn-primary");
        freeButton.classList.add("btn-disabled");
        if(expensiveButton.classList.contains("btn-disabled")) {
            expensiveButton.classList.remove("btn-disabled");
            expensiveButton.classList.add("btn-primary");
        }
    }
}

slider.onchange = sliderChange;