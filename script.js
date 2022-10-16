const container = document.querySelector('#container');

function createGrid(input){    
    for(i=0; i<(input*input); i++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);        
        //console.log(i);
    }
    container.style.cssText = 
    `grid-template-columns: repeat(${input},1fr);`    
}

createGrid(16);