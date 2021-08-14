//  onclick style system 2
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


//  onclick style system 3
//handle blue button click by setting function name

const Makeblue=document.getElementById('blueButton');
Makeblue.onclick= makeBlue;
//just set the name of the function
function makeBlue(){
    document.body.style.backgroundColor='blue';
}


//handle event using anonymous function

const greenButton = document.getElementById('make-green-button');
//anonymous function
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

//handle event using add eventlistener function

const goldenButton= document.getElementById('make-goldenrod');
goldenButton.addEventListener('click',makeGoldenRod );

function makeGoldenRod(){
    document.body.style.backgroundColor='goldenrod';
}

//addEventListener

const hotPinkButton =document.getElementById('make-hotpink');

hotPinkButton.addEventListener('click', function(){
    document.body.style.backgroundColor='hotpink';
})


//direct shortcut 
document.getElementById('make-light-blue').addEventListener('click', function(){
    document.body.style.backgroundColor='lightblue';
})