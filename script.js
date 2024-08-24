const gridElement = document.createElement("div");
const parentDiv = document.querySelector("#parentDiv");
const btnCreateGrid = document.querySelector("#gridNumber");
const btnReset = document.querySelector("#resetGame");

//functions 
function createGrid(numberOfDivs) {
    numberOfDivs = Math.round(numberOfDivs);
    numberOfDivs = Math.abs(numberOfDivs);
    if (numberOfDivs>100) {numberOfDivs = 100}
    for (let a = 0; a< numberOfDivs;a++) {
        const a = document.createElement("div");
        parentDiv.appendChild(a)
        a.classList.add("biggerChild")   
        for (let i = 0; i < (numberOfDivs); i++) {
            const i = document.createElement("div");
            a.appendChild(i)
            i.classList.add("smallerChild")
        }
    }

}

function deleteGrid() {
    while(parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.firstChild)
    }
}

function coloring() {
    let smallerChild = document.querySelectorAll(".smallerChild");
    [...smallerChild].forEach((box)=>{
        box.addEventListener("mouseover",()=>{box.style.backgroundColor = "gray";})
    })
}

btnCreateGrid.addEventListener("click", ()=>{
    let humanInput = prompt("Please specify the grid size (maximum 100)","");
    deleteGrid()
    createGrid(humanInput)
    coloring()
    
})

btnReset.addEventListener("click", ()=>{
    let smallerChild = document.querySelectorAll(".smallerChild");
    [...smallerChild].forEach((box)=>{
        box.style.backgroundColor = "white";})
    })

// Inizialise game
createGrid(16)
coloring()
//hello