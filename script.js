let MainGrid = document.querySelector('#MainContainer');
let UserInput = document.querySelector('#input');
let ApplyUserInput = document.querySelector('#apply');

let color = document.querySelector('#color');
let eraseBtn = document.querySelector('#erase');
let resetBtn = document.querySelector('#reset');

MotherSquare();
//make the SquareElements
function ChildSquare(size) {
    let Square = document.createElement('div');
    Square.classList.add('box') // EDIT THIS IN CSS YOU MOTHERFUCKER!!!!
    Square.style.width = `${size}px`;
    Square.style.width = `${size}px`;
    resetBtn.addEventListener('click', () => {
        Square.remove();
        ApplyUserInput.disabled = false;
    });
    return Square;
}

//making the grid algorithm and putting the squares in the maingrid
function MotherSquare(size){
    ApplyUserInput.addEventListener('click', () => {
        size = 0;
        size = UserInput.value;
        if(size < 2){
            alert("ERROR!, number to low!");
        }else if(size > 100){
            alert("ERROR! number to big!");
        }else if(isNaN(size)){
            alert('make sure you put in a number!');
        }else{
            for(let a = 0; a < size; a++) {
                for(let b = 0; b < size; b++) {
                    //here you append the square to the maingrid!
                    MainGrid.appendChild(ChildSquare(MainGrid.clientWidth / size));
                }
            }
        }
        ApplyUserInput.disabled = true;
    });
}

// Used event delegation to target children of the grid
MainGrid.addEventListener('mouseover', function (e) {
    // Add the "active" class to only divs with a "box" class
    if (e.target.matches('.box')) {
      e.target.classList.add('active');
    }
});