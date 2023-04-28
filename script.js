let MainGrid = document.querySelector('#MainContainer');
let UserInput = document.querySelector('#input');
let ApplyUserInput = document.querySelector('#apply');

let color = document.querySelector('#color');
let erase = document.querySelector('#erase');
let reset = document.querySelector('#reset');

let DefaultGrid = 8;

MotherSquare(DefaultGrid);

//make the SquareElements
function ChildSquare(size) {
    let Square = document.createElement('div');
    Square.classList.add('box') // EDIT THIS IN CSS YOU MOTHERFUCKER!!!!
    Square.style.width = `${size}px`;
    Square.style.width = `${size}px`;

    return Square;
}

//making the grid algorithm and putting the squares in the maingrid
function MotherSquare(size){
    ApplyUserInput.addEventListener('click', () => {
        let number = UserInput.value;
        if(number < 2){
            alert("ERROR!, number to low!");
        }else if(number > 100){
            alert("ERROR! number to big!");
        }else if(isNaN(number)){
            alert('make sure you put in a number!');
        }else{
            for(let a = 0; a < size; a++) {
                for(let b = 0; b < size; b++) {
                    //here you append the square to the maingrid!
                    MainGrid.appendChild(ChildSquare(MainGrid.clientWidth / size));
                }
            }
        }
    });
}

//removes ChildSquare from MainGrid
function ResetGrid() {
    while(MainGrid.firstChild) {
        MainGrid.removeChild(MainGrid.lastChild);
    }
    MotherSquare(ChildSquare);
}

// Used event delegation to target children of the grid
MainGrid.addEventListener('mouseover', function (e) {
    // Add the "active" class to only divs with a "box" class
    if (e.target.matches('.box')) {
      e.target.classList.add('active');
    }
});

//remove ChildSquare from MotherSquare
reset.addEventListener('click', () => {
    ResetGrid();
});