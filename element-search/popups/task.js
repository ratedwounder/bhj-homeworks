const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const close = document.querySelectorAll('.modal__close');
const showSuccess = document.querySelector('.show-success');

setTimeout(() => {
    modalMain.classList.add('modal_active');
}, 3000);

for ( i = 0; i < close.length; i++) {
    close[i].onclick = function(event) { 
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');

    }
} 

showSuccess.onclick = function (event) {
    modalSuccess.classList.add('modal_active');
}

