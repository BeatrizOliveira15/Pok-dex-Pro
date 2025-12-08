const botao = document.getElementById("botao");
const body = document.body;

botao.addEventListener("click", () => {
  if (body.classList.contains("claro")) {
    body.classList.replace("claro", "escuro");
    botao.textContent = "Modo claro";
  } else {
    body.classList.replace("escuro", "claro");
    botao.textContent = "Modo escuro ";
  }
});