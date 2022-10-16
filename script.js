const container = document.querySelector('#container');
const grids = [];

function createGrid(input){    
    for(i=0; i<(input*input); i++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
        grids.push(grid);
        //console.log(i);
    }
    container.style.cssText = 
    `grid-template-columns: repeat(${input},1fr);`    
}
createGrid(16); //initialize
for (grid of grids){
    grid.addEventListener('mouseover',hoverEffect);
}
function hoverEffect(e){
    this.classList.add('hover')    
}