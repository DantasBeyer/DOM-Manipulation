// DOM Manipulation     

// Event Delegation

// It allows users to append a SINGLE event listener to a parent element that add it to all of its presnet AND future decendants that match a selector 

// addEventListener para cada um dos botoes (li)
/* document.querySelector('#football').addEventListener('click',function(e){
    console.log('football is cliked');

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor ='lightgrey'
    }
})
document.querySelector('#basketball').addEventListener('click',function(e){
    console.log('basketball is cliked');

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor ='lightgrey'
    }
})
document.querySelector('#boxing').addEventListener('click',function(e){
    console.log('boxing is cliked');

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor ='lightgrey'
    }
})
document.querySelector('#tennis').addEventListener('click',function(e){
    console.log('tennis is cliked');

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor ='lightgrey'
    }
})
document.querySelector('#golf').addEventListener('click',function(e){
    console.log('golf is cliked');

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor ='lightgrey'
    }
}) */

// codigo com o mesmo efeito so que mais limpo atravez da delegacao e devento - Event Delegation

document.querySelector('#sports').addEventListener('click', function(e){
    console.log(e.target.getAttribute('id') + 'is clicked');

    const target = e.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'lightgrey'
    }

})


// Criando novo Elemento com atributo 
const sports = document.querySelector('#sports')
const newSport = document.createElement('li')

newSport.innerText = 'Rugby';
newSport.setAttribute('id','rugby')

sports.appendChild(newSport)