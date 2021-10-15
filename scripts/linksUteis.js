// Abaixo está um array de objetos que armazenam as informaçãoes de cada link útil
// A propriedade URL suporta tanto links em formato HTTP como links em formato de estrutura de pastas
// em caso de link com estrutura de pastas o link deve receber um link relativo ao arquivo links-uteis.html

const linksUteisList = [
  {
    name: "Webmail da Prefeitura",
    paragrath: "Acessar email intitucional da Prefeitura.",
    url: "https://webmail.salvador.ba.gov.br/",
    img: "./img/LinksUteis/link-webmail.png"
  },
  {
    name: "e-Salvador",
    paragrath: "Sistema de tramitação, consulta de atos administrativos da Prefeitura.",
    url: "http://portalesalvador.salvador.ba.gov.br/",
    img: "./img/LinksUteis/link-esalvador.png"
  },
  {
    name: "Chamados NTI",
    paragrath: "Abra um chamado em caso de problemas técnicos.",
    url: "http://www.dom.salvador.ba.gov.br/",
    img: "./img/LinksUteis/link-chamadonti.png"
  },
  {
    name: "Nota Fiscal Salvador",
    paragrath: "Verificar a autenticidade de Notas Fiscais e outros serviços.",
    url: "https://nfse.salvador.ba.gov.br/",
    img: "./img/LinksUteis/link-notafiscal.png"
  },
  {
    name: "Contracheque",
    paragrath: "Acessar plataforma de consulta de contracheque.",
    url: "http://177.20.6.123/SIGP/portal/",
    img: "./img/LinksUteis/link-contracheque.png"
  },
  {
    name: "Diario Oficial do Município",
    paragrath: "Consulta de publicações oficiais da Prefeitura.",
    url: "http://www.dom.salvador.ba.gov.br/",
    img: "./img/LinksUteis/link-diariooficial.png"
  },
]

const LinksUteisDOM = {

  gridLinks: document.querySelector(".gridLinks"),

  addLink(linksUteisList, index){
    const linkutil = document.createElement("article");
    linkutil.className = "cardLink"
    linkutil.innerHTML = LinksUteisDOM.innerHTML(linksUteisList, index)
    LinksUteisDOM.gridLinks.append(linkutil)
  },

  innerHTML(linksUteisList){
    const {name, paragrath, url, img} = linksUteisList

    const html = `
      <div class="imgLink" style="background: url(${img}) no-repeat center; background-size: cover;"></div>
      <div class="contentLink">
        <h3 class="titleLink">${name}</h3>
        <p class="paragrathLink">${paragrath}</p>
        <a class="btnLink" href=${url} target="_blank">Ir para o link</a>
      </div>
    `
    return html
  },

  generateLinksSection(){    
    linksUteisList.forEach(LinksUteisDOM.addLink)
  }
}

LinksUteisDOM.generateLinksSection()