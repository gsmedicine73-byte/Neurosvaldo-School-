// script.js
function validarLogin() {
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;

  // Login simples — aqui você pode trocar para o que quiser
  if (usuario === "osvaldo" && senha === "1") {
    // Armazena sessão no navegador
    localStorage.setItem("usuarioLogado", "sim");
    // Vai para a página principal
    window.location.href = "index.html";
    return false;
  } else {
    alert("Usuário ou senha incorretos!");
    return false;
  }
}
