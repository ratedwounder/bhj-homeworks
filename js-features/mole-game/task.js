let holes = document.querySelectorAll('.hole');
let score = Number(document.getElementById('dead').innerText);
let scoreBoard = document.getElementById('dead');
let fail = Number(document.getElementById('lost').innerText);
let failBoard = document.getElementById('lost');



for(i=0; i < holes.length; i++) {
    holes[i].addEventListener('click', function (event) { 
        
        
        if (this.classList.contains("hole_has-mole") == true) {
            if (score == 9) {
                reset();
                alert('Победа!');

            } else {
                score++;
                scoreBoard.innerHTML = score;
            }
            
            
        } else {
            if (fail == 4) {
                reset();
                alert('Поражение!');

            } else {
                fail++;
                failBoard.innerHTML = fail;
            }
            
            
        }
    })
    
}
 

function reset() {
    console.log('удаление');
    failBoard.innerHTML = '0';
    scoreBoard.innerHTML = '0';
}




