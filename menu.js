let hamburguer = document.querySelector('.icone_hamburguer');
let bar1 = document.querySelector('.bar1');
let bar2 = document.querySelector('.bar2');
let bar3 = document.querySelector('.bar3');
let menu = document.querySelector('.menu_burguer')
let lista = document.querySelector('.lista_burguer')

function mostrarMenu(){
    hamburguer.classList.toggle('active');
    bar1.classList.toggle('active');
    bar2.classList.toggle('active');
    bar3.classList.toggle('active');
    menu.classList.toggle('active');
    lista.classList.toggle('active');
}

hamburguer.addEventListener('click', mostrarMenu);