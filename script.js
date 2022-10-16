const container = document.querySelector('#container');
const grids = [];
const blackness = [];

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
        blackness.push(0);
    } 
}
createGrid(16); //initialize

function hoverEffect(e){
    this.classList.add('hover');
    blackness[grids.indexOf(this)] += 10;
    let red = randomColor(blackness[grids.indexOf(this)]),
        green = randomColor(blackness[grids.indexOf(this)]),
        blue = randomColor(blackness[grids.indexOf(this)]);
    this.style.cssText = `background-color: rgb(${red}%,
                                                ${green}%,
                                                ${blue}%)`        
    //console.log(grids.indexOf(this));
    
}
function randomColor(blackness=0){
    if (blackness>=100){
        return Math.random()*0;
    }else return Math.random()*(100-blackness);   
    
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
    blackness.splice(0,blackness.length);
}
