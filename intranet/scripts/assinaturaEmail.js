const Form = {
  formulario: document.getElementById('formulario'),
  name: document.getElementById('name'),
  position: document.getElementById('position'),
  phone: document.getElementById('phone'),
  company: document.getElementById('company'),
  adress: document.getElementById('adress'),
}

Form.formulario.addEventListener('submit', function(e){
  e.preventDefault();

  const asinatura = document.getElementById('assinaturaIMG')
  asinatura.innerHTML = `
    <div class="infoAssinatura">
      <span class="nomeFuncionario">${Form.name.value}</span>
      <span class="cargoFuncionario">${Form.position.value}</span>
      <span class="telefoneOrgao">${Form.phone.value}</span>
      <span class="nomeOrgao">${Form.company.value}</span>
      <span class="enderecoOrgao">${Form.adress.value}</span>
    </div>
    <div class="assinaturaEmail">
      <img src="img/assinatura-email.png" alt="bgAssinatura"/>
    </div>
  `

  Form.name.value = ""
  Form.position.value = "" 
  Form.phone.value = "" 
  Form.company.value = "" 
  Form.adress.value = ""
})