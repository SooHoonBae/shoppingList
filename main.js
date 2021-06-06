'use strict'
const items = document.querySelector('.items');
const footerInput = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__addBtn');

function onAdd() {
    const text = footerInput.value;
    if(text===''){
        footerInput.focus();
        return
    }
    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({ block:'center'});    
    footerInput.value='';
    footerInput.focus();
}
function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','items__item-row');
    
    const item = document.createElement('div');
    item.setAttribute('class','item');
    
    const itemName = document.createElement('span');
    itemName.setAttribute('class','item__name');
    
    const itemDelete = document.createElement('button');
    itemDelete.setAttribute('class','item__delete');
    itemDelete.innerHTML='<i class="fas fa-trash-alt"></i>';
    itemDelete.addEventListener('click',()=>{
        items.removeChild(itemRow);
        footerInput.focus();
    })

    const divider =document.createElement('div');
    divider.setAttribute('class','divider');
    
    itemRow.appendChild(item);
    item.appendChild(itemName);
    itemName.innerText = text;
    
    item.appendChild(itemDelete);
    itemRow.appendChild(divider)
    return itemRow;
}
addBtn.addEventListener('click',()=>{
    onAdd();
});
footerInput.addEventListener('keyup',(e)=>{
    if(e.keyCode===13) {
        onAdd();
    };
})