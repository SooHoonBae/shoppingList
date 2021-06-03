'use strict'
const text = document.querySelector(".text");
text.addEventListener('keyup', (event)=>{
    const div = document.createElement('div');
    const section = document.querySelector('section');
    if(event.keyCode===13 & text.value != "") {
        div.setAttribute("class","list");
        div.innerHTML = text.value + `<i class="fas fa-trash-alt"></i>`;  
        section.append(div);
        text.value = "";
    }    
})
const picon = document.querySelector('.picon');
picon.addEventListener('click', ()=>{
    const section = document.querySelector('section');
    const div = document.createElement('div');
    if(text.value != "") {
        div.setAttribute("class","list");
        div.innerHTML = text.value + `<i class="fas fa-trash-alt"></i>`;  
        section.append(div);
        text.value = "";
    }    
    
})