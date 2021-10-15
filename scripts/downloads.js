//Abaixo temos um array de objetos que armazenam os nomes e URL (Localização do arquivo no diretorio)
// Não adicionar novas propriedaades no array
// A URL pode receber links em formato HTTP. Ex. http://www.seudominio.com.br

const downloadList = [
  {
    title: "Guia de acesso a VPN",
    url: "./utils/Guia_De_Acesso_A_VPN.pdf",
  },
  {
    title: "Código de conduta",
    url: "./utils/Codigo_de_etica_e_conduta.pdf",
  },
  {
    title: "Regimento da Saltur",
    url: "./utils/Regimento_Interno_Saltur.pdf",
  },
  {
    title: "Organograma da Saltur",
    url: "./utils/Organograma_Da_Saltur.pdf",
  },
  {
    title: "Manual de Estagio",
    url: "./utils/Manual_De_Estagio.pdf",
  },
  {
    title: "Logomarca Saltur horizontal",
    url: "./utils/saltur-horizontal-colorido.png",
  },
  {
    title: "Logomarca Saltur vertical",
    url: "./utils/saltur-vertical-colorido.png",
  },
  {
    title: "Logomarca Secult horizontal",
    url: "./utils/secult-horizontal.png",
  },
  {
    title: "Logomarca Secult vertical",
    url: "./utils/secult-vertical.png",
  },
  {
    title: "Logomarca Prefeitura horizontal",
    url: "./utils/pms-horizontal-colorido.png",
  },
  {
    title: "Logomarca Prefeitura vertical",
    url: "./utils/pms-vertical-colorido.png",
  },
]

//Abaixo está a funcionalidade responsável por renderizar em tela os ítens do array

const DownloadsDOM = {

  tableDownloads: document.querySelector(".tableDownloads"),

  addDownloadNaLista(downloadList, index){
    const download = document.createElement("tr");
    download.className = "arquivoDownItems"
    download.innerHTML = DownloadsDOM.innerHTML(downloadList, index)
    DownloadsDOM.tableDownloads.append(download)
  },

  innerHTML(downloadList){
    const {title, url} = downloadList

    const html = `
      <td class="arquivoDownItem downArquivo">${title}</td>
      <td class="arquivoDownItem downLink">
        <a href="${url}" download>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.6011 15.1865V19.1865C21.6011 19.717 21.3904 20.2257 21.0153 20.6007C20.6402 20.9758 20.1315 21.1865 19.6011 21.1865H5.60107C5.07064 21.1865 4.56193 20.9758 4.18686 20.6007C3.81179 20.2257 3.60107 19.717 3.60107 19.1865V15.1865" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.60107 10.1865L12.6011 15.1865L17.6011 10.1865" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.6011 15.1865V3.18652" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </td>
    `
    return html
  },

  generateDownloadSection(){    
    downloadList.forEach(DownloadsDOM.addDownloadNaLista)
  }
}

DownloadsDOM.generateDownloadSection()