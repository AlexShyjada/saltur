// O array abaixo armazena os dados dos cards de noticias exibidos no arquivo noticias.html
// A propriedade url também pode receber dados no formato HTTP Ex: http://www.seudominio.com.br
// A propriedade img armazena a localização da imagem relativa ao arquivo noticias.html

const noticiasList = [
  {
    title: "Infectologista reforça a importância de não escolher imunizante",
    paragrath: "Para avançar ainda mais no controle da pandemia de Covid-19, os especialistas em saúde afirmam: vacina boa é vacina no braço. A infectologista da Secretaria Municipal da Saúde (SMS), Adielma Nizarala, adverte sobre os riscos de escolher a vacina contra a Covid com base no laboratório fabricante e defendeu o imunizante disponível nos postos, seja ele qual for, a fim conter a pandemia o mais rápido possível.",
    url: "./noticias/2021/09/2021-infectologista-reforca.html",
    imgURL: "https://images.unsplash.com/photo-1611694449252-02453c27856a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
  },
  {
    title: "Vacina Express segue com agendamento aberto para imunização em casa",
    paragrath: "O serviço Vacina Express prossegue em Salvador com agendamento aberto para imunização em casa contra a Covid-19. O pedido pode ser feito na plataforma on-line a partir das 8h, através do site vacinaexpress.saude.salvador.ba.gov.br. São disponibilizadas diariamente 100 vagas para que as pessoas dos grupos prioritários da estratégia com dificuldade de locomoção ou acamadas possam ter acesso à primeira ou segunda dose, de segunda à sexta-feira, sem sair de casa.",
    url: "./noticias/2021/09/2021-vacina-express.html",
    imgURL: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Programa de Valorização do Servidor",
    paragrath: "O servidor municipal dispõe de um conjunto de benefícios oferecidos através do Programa de Valorização do Servidor (PVS), muitos dos quais extensivos aos seus dependentes. O PVS atua em várias frentes: educacional, corporativa, financeira e social, com a finalidade de estimular o crescimento pessoal e o aperfeiçoamento profissional dos colaboradores da Prefeitura de Salvador. O objetivo é contribuir para a melhoria da satisfação e motivação do funcionalismo, assim como da sua qualidade de vida.",
    url: "./noticias/2021/09/2021-valorizacao-do-servidor.html",
    imgURL: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
]

// Alinhas abaixo são responsáveis por renderizar os cards de notícias

const NoticiasDOM = {

  noticiasGrid: document.getElementById("gridNoticias"),

  addNotícia(noticiasList, index){
    const noticia = document.createElement("article");
    noticia.className = "noticia"
    noticia.innerHTML = NoticiasDOM.innerHTML(noticiasList, index)
    NoticiasDOM.noticiasGrid.append(noticia)
  },

  innerHTML(noticiasList){
    const {title, paragrath, url, imgURL} = noticiasList

    const html = `
      <div
        class="imgArticle" 
        style="background: url(${imgURL}) no-repeat center; background-size: cover"
      >
      </div>
      <div class="contentArticle">
        <h3 class="articleTitle">${title}</h3>
        <p class="paragrathArticle">${paragrath}</p>
        <a class="articleLink" href=${url} target="_blank">Saiba mais</a>
      </div>
    `
    return html
  },

  generateNoticiasSection(){    
    noticiasList.forEach(NoticiasDOM.addNotícia)
  }
}

NoticiasDOM.generateNoticiasSection()