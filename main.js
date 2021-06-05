'use strict'
const text = document.querySelector(".text");
const trashicon = '<i class="trash fas fa-trash-alt"></i>'
text.addEventListener('keyup', (event)=>{
    const div = document.createElement('div');
    const section = document.querySelector('section');
    if(event.keyCode===13 & text.value != "") {
        div.setAttribute("class","list");
        div.innerHTML = text.value + `${trashicon}`;  
        section.appendChild(div);
        text.value = "";
        const lists = document.querySelectorAll('.list');
        const list = lists[lists.length-1];
        const trashes = document.querySelectorAll('.trash');
        const trash =trashes[trashes.length-1]; 
        trash.addEventListener('click',()=>{
            section.removeChild(list);
        });                    
    };        
})

const picon = document.querySelector('.picon');
picon.addEventListener('click', ()=>{
    const section = document.querySelector('section');
    const div = document.createElement('div');
    if(text.value != "") {
        div.setAttribute("class","list");
        div.innerHTML = text.value + `${trashicon}`;  
        section.append(div);
        text.value = "";
        const lists = document.querySelectorAll('.list');
        const list = lists[lists.length-1];
        const trashes = document.querySelectorAll('.trash');
        const trash =trashes[trashes.length-1]; 
        trash.addEventListener('click',()=>{
            section.removeChild(list);
        });
    };    
    
})
