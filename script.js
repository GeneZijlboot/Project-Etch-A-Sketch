//declaring variables
const grid = document.querySelector('MainContainer');
let squareSize = 8;

GeneratingGrid(squareSize);

//creating squared divs
function SquareMaker(size){
    const div = document.createElement('div')
    div.classList.add('box');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    return div;
}

//creating the grid
function GeneratingGrid() {

    //declaring variables
    const button = document.getElementById('button');
    let userinput = document.getElementById('input'); 

    //declaring error message for less then 2 or bigger then 100
    button.addEventListener("click", () => {
        if(userinput.value < 2){
            alert("ERROR, number to low");
        }else if(userinput.value > 100){
            alert("ERROR! number to big");
        }else{
            //creating the loop for building the grid
            for(let x = 0; x < userinput.value; x++)
            {   
                for(let y = 0; y < userinput.value; y++)
                {
                   console.log("sure fam!");
                   grid.appendChild(SquareMaker(grid.clientWidth / userinput.value)); //?
                }
            }
        }
    });
}
