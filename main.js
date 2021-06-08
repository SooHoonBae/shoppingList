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
};
let id = 0;
function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','items__item-row');
    itemRow.setAttribute('data-id',id);    
    itemRow.innerHTML = `
        <div class="item">
          <span class="item__name">${text}</span>
          <button class="item__delete">
            <i class="fas fa-trash-alt" data-id=${id}></i>
          </button>
        </div>
        <div class="divider"></div>
        `;
        id++;
        return itemRow;
};
addBtn.addEventListener('click',()=>{
    onAdd();
});
footerInput.addEventListener('keyup',(e)=>{
    if(e.keyCode===13) {
        onAdd();
    }
});
items.addEventListener('click', event=> {
    const id = event.target.dataset.id;
    if(id) {
        const toBeDeleted = document.querySelector(`.items__item-row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
});