'use strict'
const text = document.querySelector(".text");
text.addEventListener("keyup", (event)=>{
    if(event.keyCode===13){
        const name = text.value;
        const screen = document.querySelector(".screen");
        const result = screen.innerHTML;
        result = name;        
        console.log('hi');
    };
    
            
});