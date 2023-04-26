// DOM Manipulation 

// Event Propagation

window.addEventListener("click", function(){
    console.log('Window');
},false);

document.addEventListener("click", function(){
    console.log('Document');
},false);


document.querySelector('.div2').addEventListener("click", function(/* e */e){
    
    //to stop progagation you have to add a event object
    /* e.stopPropagation() 
    console.log(e);*/
    
    console.log("DIV 2");
},{once: true});

document.querySelector('.div1').addEventListener("click", function(){
    console.log("DIV 1");
},false);


// the (e) representes de event object
document.querySelector('button').addEventListener("click", function(e){
    e.preventDefault()
    console.log(e.target.innerText = "bora bil!");
},false);