function FirstLayer(){
    const container = document.querySelector('#MainContainer'); //reference to main exsisting container

    //creaing the FirstLayer and giving it an id
    const FirstLayer = document.createElement('div'); // making the div
    FirstLayer.classList.add('FirstLayer'); //giving the id
    FirstLayer.style.cssText = 'display: flex;';
    //adding FirstLayer to the main container
    container.appendChild(FirstLayer);


    const FirstLayer_BoxOne = document.createElement('div');
    FirstLayer_BoxOne.classList.add('FirstLayerBoxes');
    FirstLayer_BoxOne.style.cssText = 'border: solid black 1px; padding: 16px 16px 16px 16px;';
    FirstLayer_BoxOne.addEventListener("mouseover", function() {
        FirstLayer_BoxOne.style.backgroundColor = "green";
    });
    FirstLayer.appendChild(FirstLayer_BoxOne);

/*
    const FirstLayer_BoxTwo = document.createElement('div');
    FirstLayer_BoxTwo.classList.add('FirstLayerBoxes');
    FirstLayer_BoxTwo.style.cssText = 'border: solid black 1px; padding: 16px 16px 16px 16px;';
    FirstLayer.appendChild(FirstLayer_BoxTwo);

    FirstLayer_BoxTwo.addEventListener("mouseover", function() {
        FirstLayer_BoxTwo.style.backgroundColor = "green";
    });
    FirstLayer_BoxTwo.addEventListener("mouseout", function() {
        FirstLayer_BoxTwo.style.backgroundColor = "lightgray";
    });

    const FirstLayer_BoxThree = document.createElement('div');
    FirstLayer_BoxThree.classList.add('FirstLayerBoxes');
    FirstLayer_BoxThree.textContent = 'potato';
    FirstLayer_BoxThree.style.cssText = 'border: solid black 1px;';
    FirstLayer.appendChild(FirstLayer_BoxThree);

    const FirstLayer_BoxFour = document.createElement('div');
    FirstLayer_BoxFour.classList.add('FirstLayerBoxes');
    FirstLayer_BoxFour.textContent = 'potato';
    FirstLayer_BoxFour.style.cssText = 'border: solid black 1px;';
    FirstLayer.appendChild(FirstLayer_BoxFour); 

    const FirstLayer_BoxFive = document.createElement('div');
    FirstLayer_BoxFive.classList.add('FirstLayerBoxes');
    FirstLayer_BoxFive.textContent = 'potato';
    FirstLayer_BoxFive.style.cssText = 'border: solid black 1px;';
    FirstLayer.appendChild(FirstLayer_BoxFive);

    const FirstLayer_BoxSix = document.createElement('div');
    FirstLayer_BoxSix.classList.add('FirstLayerBoxes');
    FirstLayer_BoxSix.textContent = 'potato';
    FirstLayer_BoxSix.style.cssText = 'border: solid black 1px;';
    FirstLayer.appendChild(FirstLayer_BoxSix);

    const FirstLayer_BoxSeven = document.createElement('div');
    FirstLayer_BoxSeven.classList.add('FirstLayerBoxes');
    FirstLayer_BoxSeven.textContent = 'potato';
    FirstLayer_BoxSeven.style.cssText = 'border: solid black 1px;';
    FirstLayer.appendChild(FirstLayer_BoxSeven);

    const FirstLayer_BoxEight = document.createElement('div');
    FirstLayer_BoxEight.classList.add('FirstLayerBoxes');
    FirstLayer_BoxEight.textContent = 'potato';
    FirstLayer_BoxEight.style.cssText = 'border: solid black 1px;';
    FirstLayer.appendChild(FirstLayer_BoxEight);

    const FirstLayer_BoxNine = document.createElement('div');
    FirstLayer_BoxNine.classList.add('FirstLayerBoxes');
    FirstLayer_BoxNine.textContent = 'potato';
    FirstLayer_BoxNine.style.cssText = 'border: solid black 1px;';
    FirstLayer.appendChild(FirstLayer_BoxNine);

    const FirstLayer_BoxTen = document.createElement('div');
    FirstLayer_BoxTen.classList.add('FirstLayerBoxes');
    FirstLayer_BoxTen.textContent = 'potato';
    FirstLayer_BoxTen.style.cssText = 'border: solid black 1px;';
    FirstLayer.appendChild(FirstLayer_BoxTen);

    const FirstLayer_BoxELeven = document.createElement('div');
    FirstLayer_BoxELeven.classList.add('FirstLayerBoxes');
    FirstLayer_BoxELeven.textContent = 'potato';
    FirstLayer_BoxELeven.style.cssText = 'border: solid black 1px;';
    FirstLayer.appendChild(FirstLayer_BoxELeven);

    const FirstLayer_BoxTwelve = document.createElement('div');
    FirstLayer_BoxTwelve.classList.add('FirstLayerBoxes');
    FirstLayer_BoxTwelve.textContent = 'potato';
    FirstLayer_BoxTwelve.style.cssText = 'border: solid black 1px;';
    FirstLayer.appendChild(FirstLayer_BoxTwelve);

    const FirstLayer_BoxThirdteen = document.createElement('div');
    FirstLayer_BoxThirdteen.classList.add('FirstLayerBoxes');
    FirstLayer_BoxThirdteen.textContent = 'potato';
    FirstLayer_BoxThirdteen.style.cssText = 'border: solid black 1px;';
    FirstLayer.appendChild(FirstLayer_BoxThirdteen);

    const FirstLayer_BoxFourTeen = document.createElement('div');
    FirstLayer_BoxFourTeen.classList.add('FirstLayerBoxes');
    FirstLayer_BoxFourTeen.textContent = 'potato';
    FirstLayer_BoxFourTeen.style.cssText = 'border: solid black 1px;';
    FirstLayer.appendChild(FirstLayer_BoxFourTeen);

    const FirstLayer_BoxFifteen = document.createElement('div');
    FirstLayer_BoxFifteen.classList.add('FirstLayerBoxes');
    FirstLayer_BoxFifteen.textContent = 'potato';
    FirstLayer_BoxFifteen.style.cssText = 'border: solid black 1px;';
    FirstLayer.appendChild(FirstLayer_BoxFifteen);
*/
}

FirstLayer();