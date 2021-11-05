// Modifique apenas o "nome", "setor", "aniversario", e "sexo"
// Só existem duas opções de sexo: "M" para masculino e "F" para feminino, não colocar algo diferente se não não irá carregar o avatar no HTML

const aniversariantesList = [
  {
    nome: "Patricia Estrella",
    setor: "DIRAF",
    dataAniversario: "01 de Novembro",
    sexo: "F"
  },
  {
    nome: "Bianca Viana",
    setor: "Jurídico",
    dataAniversario: "16 de Novembro",
    sexo: "F"
  },
  {
    nome: "Elizabeth Coelho",
    setor: "Contratos",
    dataAniversario: "16 de Novembro",
    sexo: "F"
  },
  {
    nome: "Marcelo Silva",
    setor: "DIPRE",
    dataAniversario: "22 de Novembro",
    sexo: "M"
  },
  {
    nome: "Elthom Passarinho",
    setor: "MSVB",
    dataAniversario: "23 de Novembro",
    sexo: "M"
  },
  {
    nome: "Jemerson Santos",
    setor: "Eventos",
    dataAniversario: "29 de Novembro",
    sexo: "M"
  },
]

// Abaixo está a funcionalidade responsável por gerar o grid de aniversariantes

const AniversariantesDOM = {

  aniversariantesGrid: document.querySelector(".gridAniversariantes"),

  addAniversarianteNaLista(aniversariantesList, index){
    const aniversariante = document.createElement("div");
    aniversariante.className = "aniversariante"
    aniversariante.innerHTML = AniversariantesDOM.innerHTML(aniversariantesList, index)
    AniversariantesDOM.aniversariantesGrid.append(aniversariante)
  },

  innerHTML(aniversariantesList){
    const {nome, setor, dataAniversario, sexo} = aniversariantesList

    const html = `
      <figure class="aniversariante">
        <img 
          src="${sexo === 'F' 
            ? './img/img-aniversariante/Avatar-feminino.svg' 
            : './img/img-aniversariante/Avatar-masculino.svg' }"
          alt="Avatar ${nome}">
      </figure>
      <article class="aniversarianteData">
        <h3 class="aniverTitle">${nome}</h3>
        <p class="aniverParagrath">${dataAniversario}</p>
        <p class="aniverSector">${setor}</p>
      </article>
    `
    return html
  },

  generateAniversarianteSection(){    
    aniversariantesList.forEach(AniversariantesDOM.addAniversarianteNaLista)
  }
}

AniversariantesDOM.generateAniversarianteSection()