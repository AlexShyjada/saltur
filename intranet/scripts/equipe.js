// Abaixo temos 3 arrays de objetos, um array para os 3 setores principais da empresa
// Cada objeto tem duas propriedades nome e setorOuCargo
// na Propriedade setorOuCargo só se deve colocar o cargo caso o funcionário seja diretor

// -------------- Presidência --------------


const gabPresidenciaMembros = [
  {
    nome: "Isaac Edington",
    setorOuCargo: "Presidente",
  },
  {
    nome: "Diana Silva",
    setorOuCargo: "GAB - Presidência",
  },
]

const assegMembros = [
  {
    nome: "Flavia Faro",
    setorOuCargo: "ASSEG - Assessoria Estratégica de Gestão",
  },
  {
    nome: "Marcelo Silva",
    setorOuCargo: "ASSEG - Assessoria Estratégica de Gestão",
  },
]

const ntiMembros = [
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
]

const ascomMembros = [
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
]

const asjurMembros = [
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
]

const marketingMembros = [
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
]

const msvbMembros = [
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
]

const auditMembros = [
  {
    nome: "Paulo Nascimento",
    setorOuCargo: "AUDIT - Auditoria Interna",
  },
]

// -------------- Diraf --------------

const gabDirafMembros = [
  {
    nome: "Pedro Rodamilans",
    setorOuCargo: "Diretor Administrativo Financeiro",
  },
  {
    nome: "Patrícia Estrella",
    setorOuCargo: "DIRAF - Diretoria Administrativa Financeira",
  },
]

const geadmMembros = [
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
]

const cgpMembros = [
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
]

const cgsMembros = [
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
]

const cgmMembros = [
  {
    nome: "Michele Santana",
    setorOuCargo: "CGM - Coordenação de Gestão de Material e Patrimônio",
  },
  {
    nome: "Marcos Santos",
    setorOuCargo: "CGM - Coordenação de Gestão de Material e Patrimônio",
  },
]

const transportesMembros = [
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
]

const gerfinMembros = [
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
]

const cccMembros = [
  {
    nome: "Joseliane Santos",
    setorOuCargo: "CCC - Coordenação de Contabilidade e Custos",
  },
  {
    nome: "Liza Maire",
    setorOuCargo: "CCC - Coordenação de Contabilidade e Custos",
  },
]

const corMembros = [
  {
    nome: "Maitana Silva",
    setorOuCargo: "COR - Coordenação de Orçamento",
  },
  {
    nome: "Sandra Brito",
    setorOuCargo: "COR - Coordenação de Orçamento",
  },
]

// -------------- Direv --------------

const gabDirevMembros = [
  {
    nome: "Márcio Sampaio",
    setorOuCargo: "Diretor de Eventos",
  },
  {
    nome: "Telma Campos",
    setorOuCargo: "DIREV - Diretoria de Captação e Promoção de Eventos",
  },
]

const gecapMembros = [
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
]

const gecarMembros = [
  {
    nome: "Merina Aragão",
    setorOuCargo: "GECAR - Gerência do Carnaval",
  },
]

const cinfraMembros = [
  {
    nome: "Otavio Reis",
    setorOuCargo: "Coordenação de Infraestrutura",
  },
]

const cprogMembros = [
  {
    nome: "Marcia Andrade",
    setorOuCargo: "Coordenação de Programação",
  },
  {
    nome: "Lúcia Guimarães",
    setorOuCargo: "Coordenação de Programação",
  },
]

const gevenMembros = [
  {
    nome: "Pedro Machado",
    setorOuCargo: "GEVEN - Gerência de Festas Populares e Produção de Eventos",
  },
]
const cpeMembros = [
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
]

// Abaixo está a funcionalidade responsável for renderizar os ítens de cada array

const EquipeDOM = {

  // -------------- Presidência --------------

  tableGabPresidenciaMembros: document.querySelector(".gabPresidenciaMembros"),
  tableAssegMembros: document.querySelector(".assegMembros"),
  tableNtiMembros: document.querySelector(".ntiMembros"),
  tableAscomMembros: document.querySelector(".ascomMembros"),
  tableAsjurMembros: document.querySelector(".asjurMembros"),
  tableMarketingMembros: document.querySelector(".marketingMembros"),
  tableMsvbMembros: document.querySelector(".msvbMembros"),
  tableAuditMembros: document.querySelector(".auditMembros"),

  // -------------- Diraf --------------

  tableGabDirafMembros: document.querySelector(".gabDirafMembros"),
  tableGeadmMembros: document.querySelector(".geadmMembros"),
  tableCgpMembros: document.querySelector(".cgpMembros"),
  tableCgsMembros: document.querySelector(".cgsMembros"),
  tableCgmMembros: document.querySelector(".cgmMembros"),
  tableTransportesMembros: document.querySelector(".transportesMembros"),
  tableGerfinMembros: document.querySelector(".gerfinMembros"),
  tableCccMembros: document.querySelector(".cccMembros"),
  tableCorMembros: document.querySelector(".corMembros"),

  // -------------- Direv --------------

  tableGabDirevMembros: document.querySelector(".gabDirevMembros"),
  tableGecapMembros: document.querySelector(".gecapMembros"),
  tableGecarMembros: document.querySelector(".gecarMembros"),
  tableCinfraMembros: document.querySelector(".cinfraMembros"),
  tableCprogMembros: document.querySelector(".cprogMembros"),
  tableGevenMembros: document.querySelector(".gevenMembros"),
  tableCpeMembros: document.querySelector(".cpeMembros"),

  // -------------- Presidência --------------

  addMembroNaListaGabPresidencia(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableGabPresidenciaMembros.append(membroItem)
  },

  addMembroNaListaAsseg(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableAssegMembros.append(membroItem)
  },

  addMembroNaListaNti(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableNtiMembros.append(membroItem)
  },

  addMembroNaListaAscom(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableAscomMembros.append(membroItem)
  },

  addMembroNaListaAsjur(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableAsjurMembros.append(membroItem)
  },

  addMembroNaListaMarketing(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableMarketingMembros.append(membroItem)
  },

  addMembroNaListaMsvb(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableMsvbMembros.append(membroItem)
  },

  addMembroNaListaAudit(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableAuditMembros.append(membroItem)
  },

  addMembroNaListaCgm(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableCgmMembros.append(membroItem)
  },

  addMembroNaListaTransportes(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableTransportesMembros.append(membroItem)
  },

  // -------------- Diraf --------------

  addMembroNaListaGabDiraf(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableGabDirafMembros.append(membroItem)
  },

  addMembroNaListaGeadm(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableGeadmMembros.append(membroItem)
  },

  addMembroNaListaCGP(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableCgpMembros.append(membroItem)
  },

  addMembroNaListaCgs(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableCgsMembros.append(membroItem)
  },

  addMembroNaListaCGM(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableCgmMembros.append(membroItem)
  },

  addMembroNaListaTransportes(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableTransportesMembros.append(membroItem)
  },

  addMembroNaListaGerfin(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableGerfinMembros.append(membroItem)
  },

  addMembroNaListaCcc(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableCccMembros.append(membroItem)
  },

  addMembroNaListaCor(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableCorMembros.append(membroItem)
  },
  
  // -------------- Direv --------------
  
  addMembroNaListaGabDirevMembros(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableGabDirevMembros.append(membroItem)
  },

  addMembroNaListaGecapMembros(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableGecapMembros.append(membroItem)
  },

  addMembroNaListaGecarMembros(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableGecarMembros.append(membroItem)
  },

  addMembroNaListaCinfraMembros(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableCinfraMembros.append(membroItem)
  },
  
  addMembroNaListaCprogMembros(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableCprogMembros.append(membroItem)
  },

  addMembroNaListaGevenMembros(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableGevenMembros.append(membroItem)
  },

  addMembroNaListaCpeMembros(membro, index){
    const membroItem = document.createElement("tr");
    membroItem.className = "membroEquipe"    
    membroItem.innerHTML = EquipeDOM.innerHTML(membro, index)
    EquipeDOM.tableCpeMembros.append(membroItem)
  },


  innerHTML(membro){
    const {nome, setorOuCargo} = membro

    const html = `
      <td class="funcionario name">${nome}</td>
      <td class="funcionario setorOuCargo">${setorOuCargo}</td>
    `
    return html
  },

  generateEquipeSection(){

    // -------------- Presidência --------------

    gabPresidenciaMembros.forEach(EquipeDOM.addMembroNaListaGabPresidencia)
    assegMembros.forEach(EquipeDOM.addMembroNaListaAsseg)
    ntiMembros.forEach(EquipeDOM.addMembroNaListaNti)
    ascomMembros.forEach(EquipeDOM.addMembroNaListaAscom)
    asjurMembros.forEach(EquipeDOM.addMembroNaListaAsjur)
    marketingMembros.forEach(EquipeDOM.addMembroNaListaMarketing)
    msvbMembros.forEach(EquipeDOM.addMembroNaListaMsvb)
    auditMembros.forEach(EquipeDOM.addMembroNaListaAudit)

    // -------------- Diraf --------------

    gabDirafMembros.forEach(EquipeDOM.addMembroNaListaGabDiraf)
    geadmMembros.forEach(EquipeDOM.addMembroNaListaGeadm)
    cgpMembros.forEach(EquipeDOM.addMembroNaListaCGP)
    cgsMembros.forEach(EquipeDOM.addMembroNaListaCgs)
    cgmMembros.forEach(EquipeDOM.addMembroNaListaCGM)
    transportesMembros.forEach(EquipeDOM.addMembroNaListaTransportes)
    gerfinMembros.forEach(EquipeDOM.addMembroNaListaGerfin)
    cccMembros.forEach(EquipeDOM.addMembroNaListaCcc)
    corMembros.forEach(EquipeDOM.addMembroNaListaCor)

    // -------------- Direv --------------

    gabDirevMembros.forEach(EquipeDOM.addMembroNaListaGabDirevMembros)
    gecapMembros.forEach(EquipeDOM.addMembroNaListaGecapMembros)
    gecarMembros.forEach(EquipeDOM.addMembroNaListaGecarMembros)
    cinfraMembros.forEach(EquipeDOM.addMembroNaListaCinfraMembros)
    cprogMembros.forEach(EquipeDOM.addMembroNaListaCprogMembros)
    gevenMembros.forEach(EquipeDOM.addMembroNaListaGevenMembros)
    cpeMembros.forEach(EquipeDOM.addMembroNaListaCpeMembros)
  }
}

EquipeDOM.generateEquipeSection()