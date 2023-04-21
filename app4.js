// DOM Manipulation

//Event Listeners

// element.addEventListner("click",function);

const buttonTwo = document.querySelector('.btn-2');

function alertBtm() {
    alert('i olso love JS');
}
buttonTwo.addEventListener("click", alertBtm);

//Mouseover

const newBgColor = document.querySelector('.btn-3');
function changeBkColor (){
    newBgColor.style.backgroundColor = 'blue';
}
newBgColor.addEventListener('mouseover', changeBkColor)
