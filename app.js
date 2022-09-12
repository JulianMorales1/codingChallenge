let decrease = document.querySelector('#Decrease');
let increase = document.querySelector('#Increase');
let counter = 0;
let label = document.querySelector('#displayNumber')

decrease.addEventListener("click", decreasing);

function decreasing() {
    if (counter !== 0) {
        counter--
        //counter = counter - 1
    }
    updateNumber()
}

increase.addEventListener("click", increasing);

function increasing() {
    counter++
    updateNumber()
}

function updateNumber() {

    label.innerHTML = counter;
}