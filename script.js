function Grid() {
    //declaring variables
    const button = document.getElementById('button');
    const userinput = document.getElementById('input');

    button.addEventListener("click", () => {
        if(userinput.value < 2){
            alert("ERROR, number to low");
        }else if(userinput.value > 100){
            alert("ERROR! number to big");
        }else{
            for(let x = 0; x < userinput.value; x++)
            {   
                console.log('correct babyyyy');
                for(let y = 0; y < userinput.value; y++)
                {
                    console.log('correct babyyyy')
                }
            }
        }
    });
}

Grid();