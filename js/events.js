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