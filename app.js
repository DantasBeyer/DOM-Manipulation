//Dom Manipulation

//getElementById()
const title = document.getElementById('main-heading');
console.log(title);

//getElementByClassName()
const items = document.getElementsByClassName('conteiner')
console.log(items);

//getElementsByTagName()
const listItens = document.getElementsByTagName('li')
console.log(listItens);


//querySelector() = if you have multiples tags/id/className etc.. querySelector select the first one that commes across.
const query = document.querySelector('li')
console.log(query);

//querySelectorAll() = selects all the "divs" inside the HTML file 
const queryAll = document.querySelectorAll('div')
console.log(queryAll);
