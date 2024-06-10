const gridElement = document.createElement("div");
const parentDiv = document.querySelector("#parentDiv");

function createGrid(numberOfDivs) {
    numberOfDivs = Math.round(numberOfDivs);
    numberOfDivs = Math.abs(numberOfDivs);
    for (let a = 0; a< numberOfDivs;a++) {
        const a = document.createElement("div");
        parentDiv.appendChild(a)
        a.style.cssText = "flex-grow:1;flex-basis:auto;flex-wrap:wrap;display:flex"   
        for (let i = 0; i < (numberOfDivs); i++) {
            const i = document.createElement("div");
            a.appendChild(i)
            i.style.cssText = "border:1px solid;flex-grow:1;flex-basis:auto;flex-wrap:wrap"
            
        }
    }

}



createGrid(2);
