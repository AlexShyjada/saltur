// //Essa é a variável que armazena a localização da tag <section id="intro">

const introducao = document.getElementById('intro')

// Abaixo está uma variável que armazena as informações do banner
// É aqui que precisa alterar se o aviso mudar (normalmente sempre que o mês muda)

const content = {
  title: "Recadastramento dos aniversariantes do mês de setembro",
  description: "Atenção! Está fazendo aniversário esse mês? Então não se esqueça de fazer o recadastramento na plataforma da Secretaria Municipal de Gestão - SEMGE",
  url: "https://www.recadastramento.salvador.ba.gov.br/ativo/login",
  img: "./img/icone-calendario.svg",
}

//Essa função irá injetar o conteúdo HTML abaixo na tag <section id="intro">

function introducaoInnerHTML (content) {
  const {title, description, url, img} = content

  introducao.innerHTML = `
    <div class="container">  
      <div class="conteudo-intro">
        <h1 class="heroTitle">${title}</h1>
        <p class="dscriptionIntro">${description}</p>
        <a class="btnHero" href="${url}" target="_blank">Saiba mais</a>
      </div>
      <div class="imagem-intro">
        <img src="${img}" alt="ícone Calendario">
      </div>
    </div>
  `
}

//A linha abaixo executa a função acima assim que o script é carregado na página

introducaoInnerHTML(content)