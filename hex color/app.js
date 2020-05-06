let button = document.querySelector('button');
let combination = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
let body = document.querySelector('body');
let color = '';

button.addEventListener('click', function () {

    for (let i = 0; i < 6; i++) {
        let random = Math.floor((Math.random()) * combination.length);
        color += combination[random];
    }
    console.log(color);
    button.textContent = '🎨#' + color;
    button.style.color = '#' + color;
    body.style.backgroundColor = '#' + color;
    color = '';
});