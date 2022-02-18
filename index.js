function entrada() {

  // const botao = document.querySelector('.botao');
  // const cadastro = document.querySelector('.cadastro');

  const form = document.querySelector('.formulario');
  const mensagem = document.querySelector('.mensagem')

  function recebeEventoForm(evento) {
    evento.preventDefault()

    const alerta = document.createElement('p');
    mensagem.innerHTML = ('');
    mensagem.appendChild(alerta);

    const usuario = form.querySelector('.usuario')
    const senha = form.querySelector('.senha')

    if (usuario.value === '1' && senha.value === '2') {
      alerta.classList.add('login-sucess');
      alerta.innerHTML = (`Login Bem Sucedido`)
      form.reset();
      usuario.focus();
      window.open('pag002.html');
    } else {
      alerta.classList.add('login-failed');
      alerta.innerHTML = ('* Dados Incorretos')
      form.reset();
      usuario.focus();
    }
  }

  form.addEventListener('submit', recebeEventoForm);

};

entrada();