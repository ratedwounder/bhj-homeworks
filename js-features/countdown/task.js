let count = Number(document.getElementById('timer').textContent);
let timer = document.getElementById('timer');


let startTimer = setInterval(() => {
    count--
    timer.innerHTML = count;
    if (count === 0) {
        alert('«Вы победили в конкурсе!»');
        clearInterval(startTimer);
    }
}, 1000);