// DOM Manipulations

// Traverse the DOM

// Parent Node Traversal 
/* let ul = document.querySelector('ul') */
/* console.log(ul.parentNode.parentNode);
console.log(ul.parentNode);
console.log(ul); */

/* const html = document.documentElement;
console.log(html); */

//Child Node Traversal
/* let ul = document.querySelector('ul')
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[3].style.backgroundColor = 'blue' */


// Subliming Node Traversal

let ul = document.querySelector('ul')
const div = document.querySelector('div')

console.log(div.childNodes);

console.log(ul.previousSibling);
console.log(ul.nextSibling);

