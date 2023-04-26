// Variables

let quote = document.querySelector('#quote');
let person = document.querySelector('#person');
let btn = document.querySelector('#new-quote');

const quotes = [{
    quote:`" 1 loren asdas dasdkabsdasjdajshdjnasd 
    asdkjhasdkjha dasdkjhasd "`,
    person: `6Matheus braia`
},{
    quote:`" 2 loren asdas dasdkabsdasjdajshdjnasd 
    asdkjhasdkjha dasdkjhasd "`,
    person: `1Matheus braia`
},{
    quote:`" 3 loren asdas dasdkabsdasjdajshdjnasd 
    asdkjhasdkjha dasdkjhasd "`,
    person: `4Matheus braia`
},{
    quote:`" 4 loren asdas dasdkabsdasjdajshdjnasd 
    asdkjhasdkjha dasdkjhasd "`,
    person: `3Matheus braia`
},{
    quote:`" 5 loren asdas dasdkabsdasjdajshdjnasd 
    asdkjhasdkjha dasdkjhasd "`,
    person: `2Matheus braia`
}];

btn.addEventListener('click', function(){
    
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

