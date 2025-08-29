// script.js

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('emailForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem');
    const campoEmail = document.getElementById('email');

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@\.]+(\.[^\s@\.]+)*$/;

    if (!regex.test(email)) {
      mensagem.textContent =
        "❌ E-mail inválido. Um e-mail deve conter '@' e um domínio como '.com'";
      mensagem.style.color = 'red';
      campoEmail.style.borderColor = 'red';
    } else {
      mensagem.textContent = '✅ E-mail válido! Obrigado.';
      mensagem.style.color = 'green';
      campoEmail.style.borderColor = 'green';
    }
  });
});
