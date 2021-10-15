//Essa é a variável que armazena a localização da tag <header id"header">

const headerContainer = document.getElementById('header')
const headerContainerNotica = document.getElementById('header-noticia')

//Essa função irá injetar o conteúdo HTML abaixo na tag <header id"header"> 

function headerInnerHTML (){
  headerContainer.innerHTML = `
    <div class="container">
      <img class="logoHeader" src="./img/logosaltur.svg" alt="Logo Saltur" />
      <nav id="nav" class="nav">
        <button id="btn-mobile" aria-label="Abrir Menu" aria-haspopup="true" aria-controls="menu" aria-expanded="false">Menu<span id="hamburger"></span></button>
        <div  id="menu" class="menu" role="menu">
          <ul>
            <li><a href="./index.html">Home</a></li>
            <li class="dropDownFather">
              <a id="dropdownHoverBtn" class="dropdownHoverBtn" >Sobre Nós</a>
              <ul class="dropDown">
                <li><a href="missao-visao-valores.html">Missão, Visão e Valores</a></li>
                <li><a href="./nossa-equipe.html">Nossa Equipe</a></li>
                <li><a href="./regimento-interno.html">Regimento</a>
                <li><a href="./organograma.html" target="_blank">Organograma</a>
                <li><a href="./codigo-de-conduta.html">Código de conduta</a>
              </ul>
            </li>
            <li><a href="./noticias.html">Notícias</a></li>
            <li><a href="./links-uteis.html">Links Úteis</a></li>
            <li><a href="./ramais.html">Ramais</a></li>
            <li><a href="./downloads.html">Downloads</a></li>
          </ul>
        </div>
      </nav>
    </div>
  `
}

function headerInnerHTMLNoticias (){
  headerContainerNotica.innerHTML = `
    <div class="container">
      <img class="logoHeader" src="../../../img/logosaltur.svg" alt="Logo Saltur" />
      <nav id="nav" class="nav">
        <button id="btn-mobile" aria-label="Abrir Menu" aria-haspopup="true" aria-controls="menu" aria-expanded="false">Menu<span id="hamburger"></span></button>
        <div  id="menu" class="menu" role="menu">
          <ul>
            <li><a href="../../../index.html">Home</a></li>
            <li class="dropDownFather">
              <a id="dropdownHoverBtn" class="dropdownHoverBtn" >Sobre Nós</a>
              <ul class="dropDown">
                <li><a href="../../../missao-visao-valores.html">Missão, Visão e Valores</a></li>
                <li><a href="../../../nossa-equipe.html">Nossa Equipe</a></li>
                <li><a href="../../../regimento-interno.html">Regimento</a>
                <li><a href="../../../organograma.html" target="_blank>Organograma</a>
                <li><a href="../../../codigo-de-conduta.html">Código de conduta</a>
              </ul>
            </li>
            <li><a href="../../../noticias.html">Notícias</a></li>
            <li><a href="../../../links-uteis.html">Links Úteis</a></li>
            <li><a href="../../../ramais.html">Ramais</a></li>
            <li><a href="../../../downloads.html">Downloads</a></li>
          </ul>
        </div>
      </nav>
    </div>
  `
}

// A linha abaixo é uma condicional que verifica qual HTML o usuário está, se é uma html de notícia ou se é um html de página

headerContainer === null? headerInnerHTMLNoticias() : headerInnerHTML()

// A variavel abaixo armazena a localização do botão de menu mobile

const btnMobile = document.getElementById('btn-mobile');

// A função abaixo é serve para retirar e adicionar classes "active"

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active')  
}

// As linhas abaixo são responsáveis por ficar ouvindo eventos de click 

btnMobile.addEventListener('click', toggleMenu)
document.querySelector('#menu ul')
  .addEventListener('click', function(){
    document
    .getElementById('nav')
    .classList.remove('active')
  })
