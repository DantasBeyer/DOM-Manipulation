//DOM Manipoulation - Exercice 2 (Styling an Element)

const title = document.document.querySelector('#main-heading')
//inline document.Styling
title.style.color = 'green'; 

console.log(title);


const listItems = document.querySelectorAll('.list-items')
// para criar um inline style de varios elementos Usando "querySelectorAll" 
// é preciso fazer um "for loop" pelos itens.
for (i = 0;i <  listItems.length; i++) {
    listItems[i].style.color = 'red';
}

console.log(listItems);



// creating Elements 
const ul = document.querySelector('ul');
const newLi = document.createElement('li');


// adding Elements 
document.body.appendChild(li)