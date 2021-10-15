// Abaixo temos 3 arrays de objetos, um array para os 3 setores principais da empresa
// Cada objeto tem duas propriedades nome e setorOuCargo
// na Propriedade setorOuCargo só se deve colocar o cargo caso o funcionário seja diretor

const presidenciaMembros = [
  {
    nome: "Isaac Edington",
    setorOuCargo: "Presidente",
  },
  {
    nome: "Diana Silva",
    setorOuCargo: "GAB - Presidência",
  },
  {
    nome: "Flavia Faro",
    setorOuCargo: "ASSEG - Assessoria Estratégica de Gestão",
  },
  {
    nome: "Marcelo Silva",
    setorOuCargo: "ASSEG - Assessoria Estratégica de Gestão",
  },
  {
    nome: "Andre Ribeiro",
    setorOuCargo: "NTI - Núcleo de Tecnologia da Informação",
  },
  {
    nome: "Rodrigo Oliveira",
    setorOuCargo: "NTI - Núcleo de Tecnologia da Informação",
  },
  {
    nome: "Alexandre Shyjada",
    setorOuCargo: "NTI - Núcleo de Tecnologia da Informação",
  },
  {
    nome: "Isadora Ribeiro",
    setorOuCargo: "NTI - Núcleo de Tecnologia da Informação",
  },
  {
    nome: "Andréa Mariani",
    setorOuCargo: "ASCOM - Assessoria de Comunicação",
  },
  {
    nome: "Brenda Alves",
    setorOuCargo: "ASCOM - Assessoria de Comunicação",
  },
  {
    nome: "Jefersson Dias",
    setorOuCargo: "ASCOM - Assessoria de Comunicação",
  },
  {
    nome: "Anacele Soares",
    setorOuCargo: "ASJUR - Assessoria Jurídica",
  },
  {
    nome: "Salma kodsi",
    setorOuCargo: "ASJUR - Assessoria Jurídica",
  },
  {
    nome: "Bianca Viana",
    setorOuCargo: "ASJUR - Assessoria Jurídica",
  },
  {
    nome: "Rodrigo Cavalcanti",
    setorOuCargo: "Assessoria de Marketing",
  },
  {
    nome: "Taiana Silva",
    setorOuCargo: "Assessoria de Marketing",
  },
  {
    nome: "Marcela Silva",
    setorOuCargo: "Assessoria de Marketing",
  },
  {
    nome: "Liana Oliva",
    setorOuCargo: "MSVB - Movimento Salvador Vai de Bike",
  },
  {
    nome: "Elthom Perera",
    setorOuCargo: "MSVB - Movimento Salvador Vai de Bike",
  },
  {
    nome: "Daiane Martins",
    setorOuCargo: "MSVB - Movimento Salvador Vai de Bike",
  },
  {
    nome: "Daniele Oliveira",
    setorOuCargo: "MSVB - Movimento Salvador Vai de Bike",
  },
  {
    nome: "Jeane",
    setorOuCargo: "MSVB - Movimento Salvador Vai de Bike",
  },
  {
    nome: "Marcos Santos",
    setorOuCargo: "MSVB - Movimento Salvador Vai de Bike",
  },
  {
    nome: "Paulo Nascimento",
    setorOuCargo: "AUDIT - Auditoria Interna",
  },
]


const dirafMembros = [
  {
    nome: "Pedro Rodamilans",
    setorOuCargo: "Diretor Administrativo Financeiro",
  },
  {
    nome: "Patrícia Estrella",
    setorOuCargo: "DIRAF - Diretoria Administrativa Financeira",
  },
  {
    nome: "Branca Figueiredo",
    setorOuCargo: "GEADM - Gerência Administrativa",
  },
  {
    nome: "Carla Lima",
    setorOuCargo: "GEADM - Gerência Administrativa",
  },
  {
    nome: "Nevolandia Oliveira",
    setorOuCargo: "GEADM - Gerência Administrativa",
  },
  {
    nome: "Ana Cristina Pires",
    setorOuCargo: "GEADM - Gerência Administrativa",
  },
  {
    nome: "Rita ventura",
    setorOuCargo: "GEADM - Gerência Administrativa",
  },
  {
    nome: "Almiro Sales",
    setorOuCargo: "GEADM - Gerência Administrativa",
  },
  {
    nome: "Lisete Santana",
    setorOuCargo: "GEADM - Gerência Administrativa",
  },
  {
    nome: "Gilmara Santos",
    setorOuCargo: "GEADM - Gerência Administrativa",
  },
  {
    nome: "Cleide Santos",
    setorOuCargo: "GEADM - Gerência Administrativa",
  },
  {
    nome: "Maria Bastos",
    setorOuCargo: "GEADM - Gerência Administrativa",
  },
  {
    nome: "Roque Fernandes",
    setorOuCargo: "GEADM - Gerência Administrativa",
  },
  {
    nome: "Itamar Bararó",
    setorOuCargo: "GEADM - Gerência Administrativa",
  },
  {
    nome: "Narcizo Almeida",
    setorOuCargo: "CGP - Coordenação de Gestão de Pessoas",
  },
  {
    nome: "Alessandra Queiroz",
    setorOuCargo: "CGP - Coordenação de Gestão de Pessoas",
  },
  {
    nome: "Pedro Souza",
    setorOuCargo: "CGP - Coordenação de Gestão de Pessoas",
  },
  {
    nome: "Alex Saldanha",
    setorOuCargo: "CGS - Coordenação de Gestão de Serviços",
  },
  {
    nome: "Amaro Junior",
    setorOuCargo: "CGS - Coordenação de Gestão de Serviços",
  },
  {
    nome: "Elisabeth Coelho",
    setorOuCargo: "CGS - Coordenação de Gestão de Serviços",
  },
  {
    nome: "Michele Santana",
    setorOuCargo: "CGM - Coordenação de Gestão de Material e Patrimônio",
  },
  {
    nome: "Marcos Santos",
    setorOuCargo: "CGM - Coordenação de Gestão de Material e Patrimônio",
  },
  {
    nome: "Elinaldo Soares",
    setorOuCargo: "Transportes",
  },
  {
    nome: "Ronaldo Santos",
    setorOuCargo: "Transportes",
  },
  {
    nome: "Anselmo Silva",
    setorOuCargo: "Transportes",
  },
  {
    nome: "Janderson Menezes",
    setorOuCargo: "Transportes",
  },
  {
    nome: "José Rocha",
    setorOuCargo: "Transportes",
  },
  {
    nome: "Iradema Passos",
    setorOuCargo: "GEFIN - Gerência Financeira",
  },
  {
    nome: "Osvaldina Moreira",
    setorOuCargo: "GEFIN - Gerência Financeira",
  },
  {
    nome: "Tereza Ferreira",
    setorOuCargo: "GEFIN - Gerência Financeira",
  },
  {
    nome: "Ubaldino Neto",
    setorOuCargo: "GEFIN - Gerência Financeira",
  },
  {
    nome: "Maria da Paz",
    setorOuCargo: "GEFIN - Gerência Financeira",
  },
  {
    nome: "Joseliane Santos",
    setorOuCargo: "CCC - Coordenação de Contabilidade e Custos",
  },
  {
    nome: "Liza Maire",
    setorOuCargo: "CCC - Coordenação de Contabilidade e Custos",
  },
  {
    nome: "Maitana Silva",
    setorOuCargo: "COR - Coordenação de Orçamento",
  },
  {
    nome: "Sandra Brito",
    setorOuCargo: "CCC - Coordenação de Contabilidade e Custos",
  },
];


const direvMembros = [
  {
    nome: "Márcio Sampaio",
    setorOuCargo: "Diretor de Eventos",
  },
  {
    nome: "Telma Campos",
    setorOuCargo: "DIREV - Diretoria de Captação e Promoção de Eventos",
  },
  {
    nome: "Vinicius Caetano",
    setorOuCargo: "GECAP - Gerência de Captação de Eventos",
  },
  {
    nome: "Cristina Nachef",
    setorOuCargo: "GECAP - Gerência de Captação de Eventos",
  },
  {
    nome: "Ana Socorro",
    setorOuCargo: "GECAP - Gerência de Captação de Eventos",
  },
  {
    nome: "Amanda Santos",
    setorOuCargo: "GECAP - Gerência de Captação de Eventos",
  },
  {
    nome: "Jemerson Santos",
    setorOuCargo: "GECAP - Gerência de Captação de Eventos",
  },
  {
    nome: "Merina Aragão",
    setorOuCargo: "GECAR - Gerência do Carnaval",
  },
  {
    nome: "Otavio Reis",
    setorOuCargo: "Coordenação de Infraestrutura",
  },
  {
    nome: "Marcia Andrade",
    setorOuCargo: "Coordenação de Programação",
  },
  {
    nome: "Lúcia Guimarães",
    setorOuCargo: "Coordenação de Programação",
  },
  {
    nome: "Pedro Machado",
    setorOuCargo: "GEVEN - Gerência de Festas Populares e Produção de Eventos",
  },
  {
    nome: "Lúcia Guimarães",
    setorOuCargo: "Coordenação de Programação",
  },
  {
    nome: "Alex Rodrigues",
    setorOuCargo: "CPE - Coordenação de Produção de Eventos",
  },
  {
    nome: "Carine Bonfim",
    setorOuCargo: "CPE - Coordenação de Produção de Eventos",
  },
  {
    nome: "Paulo Junior",
    setorOuCargo: "CPE - Coordenação de Produção de Eventos",
  },
];

// Abaixo está a funcionalidade responsável for renderizar os ítens de cada array

const EquipeDOM = {

  tableGabPress: document.querySelector(".GabPres"),
  tableDiraf: document.querySelector(".Diraf"),
  tableDirev: document.querySelector(".Direv"),

  addMembroNaListaPresidencia(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableGabPress.append(membroItem)
  },
  addMembroNaListaDiraf(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableDiraf.append(membroItem)
  },
  addMembroNaListaDirev(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableDirev.append(membroItem)
  },

  
  innerHTML(membro){
    const {nome, setorOuCargo} = membro

    const html = `
      <td class="funcionario name">${nome}</td>
      <td class="funcionario setorOuCargo">${setorOuCargo}</td>
    `
    return html
  },

  generateDownloadSection(){    
    presidenciaMembros.forEach(EquipeDOM.addMembroNaListaPresidencia)
    dirafMembros.forEach(EquipeDOM.addMembroNaListaDiraf)
    direvMembros.forEach(EquipeDOM.addMembroNaListaDirev)
  }
}

EquipeDOM.generateDownloadSection()