$(document).ready(()=>{

    //Pegando o HTMLDOM:
    const paleta = {
        claro:{
            branco:'#ffffff',
            dourado:'#ffcc66',
            preto:'#333333',
            cinza:'#666666'
        }
    }
    const iniciar = document.getElementById('iniciar')
    const initUnderline = document.getElementById('initUnderline')
    const nav = document.getElementById('navigation')
    const navItens = document.getElementsByClassName('navigation-item')
    const underlines = document.getElementsByClassName('underline')
    const authors = document.getElementsByClassName('author')
    const copyright = document.getElementById('copyright')
    const content = document.getElementById('content')
    const screens = document.getElementsByClassName('content-screen')

    //Setar tamanho do content:
    content.style.height = screens.length*100+'vh';

    //Setar cores:
    nav.style.backgroundColor = paleta.claro.preto
    iniciar.style.color = paleta.claro.cinza
    for(let item of navItens){
        item.style.color = paleta.claro.cinza
    }
    for(let item of authors){
        item.style.color = paleta.claro.dourado
    }
    copyright.style.color = paleta.claro.branco
    for(let item of screens){
        item.style.backgroundColor = paleta.claro.branco
    }

    //Funções de animação da navegação:
    function navItemHighlight(item, i){
        item.style.color = paleta.claro.branco
        underlines[i].classList.add('highlight');
    }
    function navItemNormalize(item, i){
        item.style.color = paleta.claro.cinza
        underlines[i].classList.remove('highlight');
    }
    //onMouseOver:
    iniciar.onmouseover = ()=>{iniciar.style.color = paleta.claro.preto; initUnderline.classList.add('highlight')};
    navItens[0].onmouseover = ()=>navItemHighlight(navItens[0], 0)
    navItens[1].onmouseover = ()=>navItemHighlight(navItens[1], 1)
    navItens[2].onmouseover = ()=>navItemHighlight(navItens[2], 2)
    //onMouseOut:
    navItens[0].onmouseout = ()=>navItemNormalize(navItens[0], 0)
    navItens[1].onmouseout = ()=>navItemNormalize(navItens[1], 1)
    navItens[2].onmouseout = ()=>navItemNormalize(navItens[2], 2)
    iniciar.onmouseout = ()=>{iniciar.style.color = paleta.claro.cinza; initUnderline.classList.remove('highlight')};

    //mudar o Highlight quando o scroll estiver nas telas respectivas:
    $(window).scroll(()=>{
        let wdn = $(window)
        if(wdn.scrollTop() < window.innerHeight*1/2){
            navItemNormalize(navItens[0], 0)
            navItemNormalize(navItens[1], 1)
            navItemNormalize(navItens[2], 2)
            $('.gotop-button').fadeOut(300);
        }
        if(wdn.scrollTop() >= window.innerHeight*1/2){
            navItemNormalize(navItens[1], 1)
            navItemHighlight(navItens[0], 0)
            $('.gotop-button').fadeIn(300);
        }
        if(wdn.scrollTop() >= window.innerHeight*21/2){
            navItemNormalize(navItens[0], 0)
            navItemNormalize(navItens[2], 2)
            navItemHighlight(navItens[1], 1)
        }
        if(wdn.scrollTop() >= window.innerHeight*23/2){
            navItemNormalize(navItens[1], 1)
            navItemHighlight(navItens[2], 2)
        }
        if(wdn.scrollTop() >= window.innerHeight*25/2){
            navItemNormalize(navItens[0], 0)
            navItemNormalize(navItens[1], 1)
            navItemNormalize(navItens[2], 2)
        }

        
    });
})