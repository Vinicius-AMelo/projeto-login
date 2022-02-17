function entrada() {
  const form = document.querySelector('.formulario')
  const alerta1 = document.querySelector('.alerta1')
  const alerta2 = document.querySelector('.alerta2')
  


  function recebeEventoForm(evento) {
    evento.preventDefault()

    const usuario = form.querySelector('.usuario')
    const senha = form.querySelector('.senha')

    if (usuario.value === '1' && senha.value === '2') {
      alert(
        `Login Bem Sucedido`)
      window.open("pag002.html");
      setTimeout(function(){
        window.location.reload(1);
     }, 700);
    } else {
      alerta1.innerHTML = (`* Dados Incorretos`)
      setTimeout(function(){
        window.location.reload(1);
     }, 700);
            
    }
  }

  form.addEventListener('submit', recebeEventoForm);

};

entrada();