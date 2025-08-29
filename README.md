# 📧 Validação de E-mail com JavaScript

> Projeto desenvolvido por [@mlumoura](https://github.com/mlumoura)  
> Repositório: [validacao_email](https://github.com/mlumoura/validacao_email)

Este projeto mostra como validar e-mails em tempo real usando JavaScript puro, manipulando o DOM e simulando uma verificação com backend. Ideal para quem está aprendendo interatividade na web e quer entender como deixar formulários mais inteligentes.

---

## 🗂️ Estrutura de Arquivos

| Arquivo        | Função                                      | Link |
|----------------|---------------------------------------------|------|
| 📄 `index.html` | Estrutura da página                         | [Ver](https://github.com/mlumoura/validacao_email/blob/main/index.html) |
| 🎨 `style.css`  | Estilização visual                          | [Ver](https://github.com/mlumoura/validacao_email/blob/main/style.css) |
| ⚙️ `script.js`  | Lógica de validação e manipulação do DOM    | [Ver](https://github.com/mlumoura/validacao_email/blob/main/script.js) |

---

## 🧠 Tecnologias Utilizadas

- HTML5 semântico  
- CSS3 com classes reutilizáveis  
- JavaScript puro (Vanilla JS)  
- Expressões Regulares para validação  
- Manipulação do DOM com `querySelector`, `addEventListener`, etc.

---

## 🔍 Como Funciona

O script realiza:

- ✅ Validação do campo de e-mail com RegEx  
- 🔄 Feedback visual em tempo real (borda vermelha ou verde)  
- ⛔ Bloqueio do envio do formulário com `preventDefault()`  
- 🕒 Simulação de verificação com backend usando `setTimeout`

---

## 🧪 A RegEx Desmistificada

A expressão regular usada para validar o e-mail é:

```js
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@\.]+(\.[^\s@\.]+)*$/;
```

Vamos quebrar isso em partes:

| Parte             | Significado                                                                 |
|------------------|------------------------------------------------------------------------------|
| `^`              | Início da string                                                             |
| `[^\s@]+`        | Um ou mais caracteres que **não** sejam espaço (`\s`) ou arroba (`@`)        |
| `@`              | Um arroba obrigatório                                                        |
| `[^\s@]+`        | Um ou mais caracteres após o arroba, sem espaços ou outro arroba             |
| `\.`             | Um ponto literal (precisa escapar com `\`)                                  |
| `[^\s@]+`        | Um ou mais caracteres após o ponto                                           |
| `$`              | Fim da string                                                                |

💡 **Resumo:** Garante que o e-mail tenha formato `algo@dominio.com`, sem espaços ou múltiplos `@`.

---

## 📦 Trecho do Código Real

```js
document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const form = document.getElementById("formulario");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
      emailInput.style.border = "2px solid green";
    } else {
      emailInput.style.border = "2px solid red";
    }
  });
});
```

---

## 🚀 Melhorias Futuras

- 🔗 Integração com API real  
- 🧩 Validação por etapas (multi-step)  
- 🧠 Feedback com ícones e animações  
- ♿ Acessibilidade com ARIA  
- 💾 Armazenamento local com `localStorage`

---

## ❓ FAQ Técnico

**🟡 Posso usar `type="email"` no input?**  
Sim, mas usamos `type="text"` para controle total com JavaScript.

**🟢 Por que usar `DOMContentLoaded`?**  
Evita que o script tente acessar elementos que ainda não foram carregados.

**🔴 O que acontece se eu não usar `preventDefault()`?**  
O formulário será enviado e a página recarregada, interrompendo a validação.

---

## 👩‍💻 Autoria

Feito com carinho por [@mlumoura](https://github.com/mlumoura)  
Se curtir, ⭐ o repositório e compartilhe!

---

Se quiser, posso adicionar um GIF demonstrando o funcionamento, badges de status, ou até uma seção “Aprendizados da Lu” com suas descobertas sobre RegEx. Quer que eu monte isso também?
