let dropDown = document.querySelector('.dropdown');
let dropVal = document.querySelector('.dropdown__value');
let dropList = document.querySelector('.dropdown__list');
let listItem = document.querySelectorAll('.dropdown__link');
let dropItem = document.querySelectorAll('.dropdown__item');
let flag = 0;

function showDrop() {
    
    dropList.style = 'display: block';
    flag++;
    if (flag > 1) {
        dropList.style = 'display: none';
        flag = 0;
    } 
}

for (i = 0; i < listItem.length; i++) { 
    listItem[i].onclick = function (e) {
        e.preventDefault();
        for (v = 0; v < dropItem.length; v++) {
            dropItem[v].classList.remove('dropdown__list_active'); 
        };
        this.parentElement.classList.add('dropdown__list_active'); 
        dropVal.innerHTML = this.innerHTML
    }
}


dropDown.addEventListener('click', showDrop);
