
//Selector variables
const container = document.querySelector(".container")
const sizeInput = document.querySelector("#size-input");
const submit = document.querySelector("#submit")
const blackButton = document.querySelector("#black")
const rainbowButton = document.querySelector("#rainbow")
const gradualButton = document.querySelector("#gradual")

//Starting Grid
sizeInput.value = 10
generateGrid()

//Remove cells upon changing grid size
function removeCells() {
    while(container.firstChild) {
      container.removeChild(container.firstChild);
    }
}

//Generate New Grid
submit.addEventListener("click", generateGrid)
sizeInput.addEventListener("keypress", function (e) {
    if(e.key === "Enter"){
        generateGrid()
    }
})

function generateGrid() {
    removeCells()
    cellNumber = sizeInput.value;
    for(let i = 1; i <= cellNumber * cellNumber; i ++) {
        cell = document.createElement("div");
        container.appendChild(cell);
        cell.classList.add("cell");
        cell.addEventListener("mouseover", fillCell)
    }
    container.style["grid-template-columns"] = `repeat(${cellNumber}, 1fr)`;
    
}

//Mode Selection
rainbowButton.addEventListener("click", () => {
    rainbowButton.classList.add("clickedRainbow")
    rainbowButton.classList.remove("clickedBlack")
    rainbowButton.classList.remove("clickedGradual")

});

blackButton.addEventListener("click", () => {
    blackButton.classList.add("clickedBlack")
    rainbowButton.classList.remove("clickedRainbow")
    gradualButton.classList.remove("clickedGradual")
});

gradualButton.addEventListener("click", () => {
    gradualButton.classList.add("clickedGradual")
    rainbowButton.classList.remove("clickedRainbow")
    blackButton.classList.remove("clickedBlack")
});

//Fill Cells with Selected Mode
var gradFill = 0

function fillCell (){
    if(rainbowButton.classList.contains("clickedRainbow")) {
        let rgbRandom = (Array.from({length: 3}, () => Math.floor(Math.random() * (250 - 0 + 1)) + 0))
        this.style.backgroundColor = `rgb(${rgbRandom[0]}, ${rgbRandom[1]}, ${rgbRandom[2]})`;
    
    }else if(blackButton.classList.contains("clickedBlack")) {
        this.style.backgroundColor = "black";
    
    }else if(gradualButton.classList.contains("clickedGradual")) {
        gradFill = (gradFill + 3)%255
        this.style.backgroundColor = `rgb(${gradFill}, ${gradFill}, ${gradFill})`

    }else{
        this.style.backgroundColor = "black";
    }
}

