'use strict'
const text = document.querySelector(".text");
text.addEventListener('keyup', (event)=>{
    const body = document.querySelector('body');
    const div = document.createElement('div');
    const bottom = document.querySelector("bottom");
    if(event.keyCode===13) {
        div.setAttribute("class","list");
        div.innerHTML = text.value + `   <i class="fas fa-trash-alt"></i>`;  
        body.insertBefore(div,bottom);
        text.value = "";
    }    
})