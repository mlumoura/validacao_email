const form = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    emailInput.classList.remove('erro');
    mensagem.textContent = 'E-mail válido! ✅';
    mensagem.style.color = 'green';
  } else {
    emailInput.classList.add('erro');
    mensagem.textContent = 'Formato de e-mail inválido ❌';
    mensagem.style.color = 'red';

    // Ativa o efeito shake
    emailInput.classList.add('shake');
    setTimeout(() => {
      emailInput.classList.remove('shake');
    }, 300);
  }
});

