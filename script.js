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
    for (grid of grids){
        grid.addEventListener('mouseover',hoverEffect);
    } 
}
createGrid(16); //initialize

function hoverEffect(e){
    this.classList.add('hover')    
}

const inputButton = document.querySelector('#input');
    inputButton.addEventListener('click',getInput);    
function getInput(){    
     let gridInput = prompt('Please enter an integer from 1-100')
     let status = false;
    while (status === false ){
        if (gridInput > 0 &&
            gridInput < 101){
            break;
            }
        else{gridInput = prompt('Please enter an integer from 1-100!')}                      
    }
    //console.log(gridInput);
    //remove old grids
    removeOldGrids();
    createGrid(gridInput);
};

function removeOldGrids(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    grids.splice(0,grids.length);   
}
