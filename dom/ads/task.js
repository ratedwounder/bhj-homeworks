let rotatorItems = document.querySelectorAll('.rotator__case');
let index = 0;

function rotation() {
    if (index == rotatorItems.length) {
        index = 0;
    }

    if (rotatorItems.item(index).previousElementSibling == null) {
        rotatorItems.item(index).classList.add('rotator__case_active');
        rotatorItems.item(rotatorItems.length - 1).className = 'rotator__case';
    } else {
        rotatorItems.item(index).previousElementSibling.classList.remove('rotator__case_active');
        rotatorItems.item(index).classList.add('rotator__case_active');
    }

    index += 1;
}


setInterval(() => {
    rotation()
}, 1000);