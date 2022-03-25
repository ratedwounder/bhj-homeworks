let cookie = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');
let counterNum = Number(document.getElementById('clicker__counter').innerText);

cookie.onclick = function() {
    counterNum++
    counter.innerHTML = counterNum;
    cookie.style.width = "250px";
    setTimeout(() => {
        cookie.style.width = "200px";
    }, 50);
}