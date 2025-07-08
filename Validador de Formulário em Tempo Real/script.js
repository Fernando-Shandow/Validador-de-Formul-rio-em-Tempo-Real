const emailInput = document.getElementById("emailInput");
const emailErro = document.getElementById("emailErro");

emailInput.addEventListener("input", () => {
  const valorEmail = emailInput.value;

  if (!valorEmail.includes("@")) {
    emailErro.textContent = "E-mail inválido!";
    emailInput.style.borderColor = "red";
  } else {
    emailErro.textContent = "";
    emailInput.style.borderColor = ""; // volta ao padrão
  }
});
