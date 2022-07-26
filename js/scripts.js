/* captura dos elementos html*/
const titulo = document.querySelector('#home h1');
const subtitulo = document.querySelector('#write-animation');
const btnMenu = document.querySelector('.btn-menu');
const containerMobileMenu = document.querySelector('.mobile-menu');
const btnBackgroundColor = document.querySelector('#btn-iconDay');
const iconColor = document.querySelector('#icon-day');
const bodyColor = document.querySelector('#color');
const logo = document.querySelector('#logo');
const navbar = document.querySelector('.list');

/* animação do elemento write-animation*/
function tipoWrite(elemento) {
    const writeArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    writeArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 100 * i)
    });
}

//tempo para inicio da write-animation
function iniciarWrite() {
    setTimeout(function () {
        subtitulo.style.visibility = 'visible'
        tipoWrite(subtitulo);
    }, 1000);
}

//mudança do background da pagina
btnBackgroundColor.addEventListener('click', function () {
    bodyColor.classList.toggle('page_white')
    const textoSobre = document.querySelector('#sobre p');
    const backSobre = document.querySelector('#sobre');
    const backLinksWeb = document.querySelector('#links-web')
    const backQualificacoes = document.querySelector('#qualificacoes')

    if (bodyColor.classList.value === 'page_white') {
        navbar.style.color = 'orangered';
        titulo.style.color = 'orangered';
        subtitulo.style.color = '#000';
        logo.style.color = '#f0f0ff';
        backSobre.style.background = '#f0f0ff'
        backLinksWeb.style.backgroundColor = '#f0f0ff';
        // backProjetosImg.forEach((el) => { el.style.backgroundColor = 'transparent'})
        backQualificacoes.style.backgroundColor = '#f0f0ff';
        iconColor.classList.remove('fa-sun')
        iconColor.classList.add('fa-moon')
        iconColor.style.color = 'rgb(3, 107, 121)'
    } else {
        titulo.style.color = '#f0f0ff';
        subtitulo.style.color = '#ff4500';
        logo.style.color = '#ff4500';
        navbar.style.color = '#f0f0ff';
        textoSobre.style.color = '#f0f0ff';
        backSobre.style.background = 'radial-gradient(rgba(0, 225, 255, 0.379),black)';
        backLinksWeb.style.backgroundColor = '#000';
        // backProjetosImg.forEach((el) => { el.style.backgroundColor = 'rgb(2, 69, 78)'})
        backQualificacoes.style.backgroundColor = 'rgb(26, 25, 25)';
        iconColor.classList.remove('fa-moon')
        iconColor.classList.add('fa-sun')
        iconColor.style.color = ''
    }
});



//ação de clique do botão de display do menu mobile
btnMenu.addEventListener('click', function () {
    const list = document.querySelectorAll('mobile-menu ul li a');

    containerMobileMenu.classList.toggle('hide')
})

//navegação dos slide da section projetos
function scrollBar() {
    const scroll = document.querySelector('.gallery-wrapper');
    const controlR = document.querySelector('.arrow-right');
    const controlL = document.querySelector('.arrow-left');

    controlR.addEventListener('click', function () {

        scroll.scrollBy(312, 0);
        scroll.draggable()
    })

    controlL.addEventListener('click', function () {
        scroll.scrollBy(-312, 0)
    })

}

//Alerta de desenvolvimento
function faseDesenvolvimento() { setTimeout(() => alert('Portfolio em fase de desenvolvimeno'), 5000) }


const imgs = document.querySelector('#qualificacoes-img');
const img = document.querySelectorAll('.imgs-certificados img');

let idx = 0;

function carrossel() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 312}px)`
}

setInterval(carrossel, 5000)

//chamada dos eventos

iniciarWrite()
//faseDesenvolvimento()
scrollBar()