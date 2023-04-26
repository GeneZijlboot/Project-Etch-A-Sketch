/declaring values
const button = document.getElementById('button');
const userinput = document.getElementById('input');

//Grid now has the value of the user input
function Grid() {
    button.addEventListener("click", () => {
        if(userinput.value < 2){
            alert("ERROR, number to low");
        } else if(userinput.value > 100){
            alert("ERROR! number to big");
        } else {
            console.log(userinput.value)
        }
    });
}

//function grid werkt + errors ook,
//de waarde van de userinput is stored in "GridValue" en deze GridValue moet je vervolgens gebruiken om de grid te maken doormiddel van loopie denk ik..

function GenerateGrid(){
    const GridValue = Grid();
    for(let x = 0; x < 16; x++)
    {   
        console.log('x');
        for(let y = 0; y < 16; y++)
        {
            console.log('y')
        }
    }
}

GenerateGrid();

/*
}else{  
    console.log(GridValue);
}

for(let i=0; i<GridValue; i++){
    something..addEventListener("mouseover", => {
        const square = document.createElement('div');
        square
    });
}
*/