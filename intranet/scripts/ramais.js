// O array abaixo recebe os dados referentes ao ramal e quem estará atendendo o ramal

const segundoAndar = [
  {
    atendente: "Isaac Edington",
    setor: "Presidência",
    ramal: "7671",
  },
  {
    atendente: "Diana",
    setor: "Presidência",
    ramal: "7608",
  },
  {
    atendente: "Flávia",
    setor: "Assessoria",
    ramal: "7603",
  },
  {
    atendente: "Pedro Rodamilans",
    setor: "Diretoria Adminstrativa e Financeira",
    ramal: "7610",
  },
  {
    atendente: "Patrícia",
    setor: "Diretoria Adminstrativa e Financeira",
    ramal: "7617",
  },
  {
    atendente: "Anacele, Salma e Bianca",
    setor: "Jurídico",
    ramal: "7666",
  },
  {
    atendente: "Liana",
    setor: "Movimento Salvador Vai de Bike",
    ramal: "7605",
  },
  {
    atendente: "Marcos, Daiane e Passarinho",
    setor: "Movimento Salvador Vai de Bike",
    ramal: "7680",
  },
  {
    atendente: "Andréa, Brenda e Jeferson",
    setor: "Comunicação",
    ramal: "7623",
  },
  {
    atendente: "Marcela e Tayana",
    setor: "Marketing",
    ramal: "7695",
  },
]

const primeiroAndar = [
  {
    atendente: "Branca Figueiredo, Carla, Landa e Ana Cristina",
    setor: "Gerência Administrativa",
    ramal: "7624",
  },
  {
    atendente: "Alex",
    setor: "Contratos",
    ramal: "7676",
  },
  {
    atendente: "Amaro",
    setor: "Contratos",
    ramal: "7675",
  },
  {
    atendente: "Beth",
    setor: "Contratos",
    ramal: "7622",
  },
  {
    atendente: "Paulo",
    setor: "Auditoria",
    ramal: "7681",
  },
  {
    atendente: "Narcizo",
    setor: "Setor Pessoal e RH",
    ramal: "7643",
  },
  {
    atendente: "Alessandra e Pedro",
    setor: "Setor Pessoal e RH",
    ramal: "7631",
  },
  {
    atendente: "Michele e Marcos",
    setor: "Almoxarifado",
    ramal: "7646",
  },
  {
    atendente: "Iradema",
    setor: "Gerência Financeira",
    ramal: "7640",
  },
  {
    atendente: "Neto, Maitana, Da Paz",
    setor: "Financeiro",
    ramal: "7638",
  },
  {
    atendente: "Dina, Tereza e Conceição",
    setor: "Financeiro",
    ramal: "7645",
  },
  {
    atendente: "Sandra",
    setor: "Financeiro",
    ramal: "7696",
  },
  {
    atendente: "Joseliane e Liza",
    setor: "Contabilidade",
    ramal: "7632",
  },
  {
    atendente: "André, Rodrigo, Alexandre e Isadora",
    setor: "NTI - Núcleo de Tecnologia da Informação",
    ramal: "7698",
  },
]

const mezanino = [
  {
    atendente: "Marcio Sampaio",
    setor: "Diretoria de Eventos",
    ramal: "7677",
  },
  {
    atendente: "Telma",
    setor: "Eventos",
    ramal: "7630",
  },
  {
    atendente: "Paulo, Carine e Alex",
    setor: "Eventos",
    ramal: "7672",
  },
  {
    atendente: "Ana do Socorro e Christina",
    setor: "Eventos",
    ramal: "7607",
  },
  {
    atendente: "Vinícius",
    setor: "Eventos",
    ramal: "7620",
  },
  {
    atendente: "Ana Socorro",
    setor: "Eventos",
    ramal: "7697",
  },
  {
    atendente: "Merina",
    setor: "Carnaval",
    ramal: "7609",
  },
  {
    atendente: "Márcia e Lúcia",
    setor: "Carnaval",
    ramal: "7679",
  },
  {
    atendente: "Pedrão",
    setor: "Festas Populares",
    ramal: "7682",
  },
  {
    atendente: "Otávio",
    setor: "Estrutura",
    ramal: "7668",
  },
  {
    atendente: "Rita",
    setor: "Recepção/Protocolo",
    ramal: "7684",
  },
  {
    atendente: "Anselmo, Elinaldo, Ronaldo",
    setor: "Sala Dos Motoristas",
    ramal: "7641",
  },
]

const terreo = [
  {
    atendente: "Maria, Roque e Itamar",
    setor: "Portaria",
    ramal: "7616",
  },
]

// As linhas abaixo são responsáveis por renderizar os dados da array no arquivo ramail.html

const ramalDOM = {

  tableSegundoAndar: document.querySelector("#tableSegundoAndar"),
  tablePrimeiroAndar: document.querySelector("#tablePrimeiroAndar"),
  tableMezanino: document.querySelector("#tableMezanino"),
  tableTerreo: document.querySelector("#tableTerreo"),

  addRamalSegundoAndar(infoRamal, index){
    const ramalSegundoAndar = document.createElement("tr");
    ramalSegundoAndar.className = "ramalItems"
    ramalSegundoAndar.innerHTML = ramalDOM.innerHTML(infoRamal, index)
    ramalDOM.tableSegundoAndar.append(ramalSegundoAndar)
  },
  addRamalPrimeiroAndar(infoRamal, index){
    const ramalPrimeiroAndar = document.createElement("tr");
    ramalPrimeiroAndar.className = "ramalItems"
    ramalPrimeiroAndar.innerHTML = ramalDOM.innerHTML(infoRamal, index)
    ramalDOM.tablePrimeiroAndar.append(ramalPrimeiroAndar)
  },
  addRamalMezanino(infoRamal, index){
    const ramalMezanino = document.createElement("tr");
    ramalMezanino.className = "ramalItems"
    ramalMezanino.innerHTML = ramalDOM.innerHTML(infoRamal, index)
    ramalDOM.tableMezanino.append(ramalMezanino)
  },
  addRamalPortaria(infoRamal, index){
    const ramalTerreo = document.createElement("tr");
    ramalTerreo.className = "ramalItems"
    ramalTerreo.innerHTML = ramalDOM.innerHTML(infoRamal, index)
    ramalDOM.tableTerreo.append(ramalTerreo)
  },

  innerHTML(infoRamal){
    const {atendente, setor, ramal} = infoRamal

    const html = `
      <td class="ramalItem setor">${atendente}</td>
      <td class="ramalItem nome">${setor}</td>
      <td class="ramalItem ramal">${ramal}</td>
    `
    return html
  },

  generateRamalSection(){    
    segundoAndar.forEach(ramalDOM.addRamalSegundoAndar)
    primeiroAndar.forEach(ramalDOM.addRamalPrimeiroAndar)
    mezanino.forEach(ramalDOM.addRamalMezanino)
    terreo.forEach(ramalDOM.addRamalPortaria)
  }
}

ramalDOM.generateRamalSection()