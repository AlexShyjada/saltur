//Essa é a variável que armazena a localização da tag <footer id="footer">

const footer = document.getElementById('footer')
const footerNoticia = document.getElementById('footer-noticia')

//Essa função irá injetar o conteúdo HTML abaixo na tag

function footerInnerHTML (){
  footer.innerHTML = `
    <div class="container gridFooter">
        <img class="logoSalturFooter" src="./img/logosaltur2.svg" alt="Logo Saltur" />

        <div class="colunaDeLinks one">
          <a class="link-footer" href="http://177.20.6.123/SIGP/portal/" target="_blank">Contracheque</a>
          <a class="link-footer" href="http://www.dom.salvador.ba.gov.br/" target="_blank">Diario Oficial</a>
          <a class="link-footer" href="https://www.tcm.ba.gov.br" target="_blank">TCM</a>
          <a class="link-footer" href="https://www.esalvador.salvador.ba.gov.br/login" target="_blank">eSalvador</a>
        </div>

        <div class="colunaDeLinks two">
          <a class="link-footer" href="http://curtacarnaval.com.br/" target="_blank">Carnaval de Salvador</a>
          <a class="link-footer" href="http://www.salvadorvaidebike.salvador.ba.gov.br/" target="_blank">SSA Vai de Bike</a>
          <a class="link-footer" href="http://www.festivaldacidade.salvador.ba.gov.br/" target="_blank">Festival da Cidade</a>
          <a class="link-footer" href="http://reveillon.salvador.ba.gov.br/" target="_blank">Virada Salvador</a>
        </div>
        
        <div class="colunaDeLinks three">
          <a class="link-footer" href="http://saltur.salvador.ba.gov.br/" target="_blank">SALTUR</a>
          <a class="link-footer" href=""https://webmail.salvador.ba.gov.br/" target="_blank">webmail</a>
          <a class="link-footer" href="http://portalesalvador.salvador.ba.gov.br/" target="_blank">e-Salvador</a>
          <a class="link-footer" href="http://www.dom.salvador.ba.gov.br/" target="_blank">Diario Oficial</a>
        </div>

        <img class="logoNTI" src="./img/logonti2.svg" alt="Logo NTI" />
    </div>
    <div class="copy ">
      <p class="textCopy container">Copyright © 2021 -  Desenvolvido por NTI - Empresa Salvador Turismo SALTUR</p>
    </div>
  `
}

function footerInnerHTMLNoticia (){
  footerNoticia.innerHTML = `
    <div class="container gridFooter">
    <img class="logoSalturFooter" src="../../../img/logosaltur2.svg" alt="Logo Saltur" />
    
      <div class="colunaDeLinks one">
        <a class="link-footer" href="http://177.20.6.123/SIGP/portal/" target="_blank">Contracheque</a>
        <a class="link-footer" href="http://www.dom.salvador.ba.gov.br/" target="_blank">Diario Oficial</a>
        <a class="link-footer" href="https://www.tcm.ba.gov.br" target="_blank">TCM</a>
        <a class="link-footer" href="https://www.esalvador.salvador.ba.gov.br/login" target="_blank">eSalvador</a>
      </div>
      
      <div class="colunaDeLinks two">
        <a class="link-footer" href="http://curtacarnaval.com.br/" target="_blank">Carnaval de Salvador</a>
        <a class="link-footer" href="http://www.salvadorvaidebike.salvador.ba.gov.br/" target="_blank">SSA Vai de Bike</a>
        <a class="link-footer" href="http://www.festivaldacidade.salvador.ba.gov.br/" target="_blank">Festival da Cidade</a>
        <a class="link-footer" href="http://reveillon.salvador.ba.gov.br/" target="_blank">Virada Salvador</a>
      </div>
      
      <div class="colunaDeLinks three">
        <a class="link-footer" href="http://saltur.salvador.ba.gov.br/" target="_blank">SALTUR</a>
        <a class="link-footer" href=""https://webmail.salvador.ba.gov.br/" target="_blank">webmail</a>
        <a class="link-footer" href="http://portalesalvador.salvador.ba.gov.br/" target="_blank">e-Salvador</a>
        <a class="link-footer" href="http://www.dom.salvador.ba.gov.br/" target="_blank">Diario Oficial</a>
      </div>

      <img class="logoNTI" src="../../../img/logonti2.svg" alt="Logo NTI" />
    </div>

      <div class="copy ">
          <p class="textCopy container">Copyright © 2021 -  Desenvolvido por NTI - Empresa Salvador Turismo SALTUR</p>
      </div>
  `
}

//A linha abaixo executa a função acima assim que o script é carregado na página

footer === null? footerInnerHTMLNoticia() : footerInnerHTML()