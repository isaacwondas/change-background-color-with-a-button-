const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['green', 'purple', 'red' , 'yellow', 'pink', 'white', 'blue'];

colorBtn.addEventListener('click', changeColor);

function changeColor() {
    //bodyBcg.style.backgroundColor = 'blue';
    let random = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor = colors[random];
}