//DOM Manipoulation - Exercice 2 (Styling an Element)

const title =  document.querySelector('#main-heading')
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
ul.append(newLi)

//modifying the text
const firstListIten = document.querySelector('.list-items');
console.log(firstListIten);

newLi.innerText = 'X-Man';

//Modifying Attributes & Classes

newLi.setAttribute('id', 'main-heading');
newLi.removeAttribute('id');

const title2 = document.querySelector('#main-heading')
console.log(title2.getAttribute('id'));

newLi.classList.add('list-items')
/* newLi.classList.remove('list-items') */

console.log(newLi.classList.contains('list-items')); // true

 
// Remove Elements
/* newLi.remove(); */