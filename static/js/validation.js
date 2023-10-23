
 $(document).ready(function () {
   
    const portInput = $("#port-box");

    portInput.on("keypress", function (event) {
      const key = event.key;

      if (!/[0-9,]/.test(key)) {
        event.preventDefault();
      }
    });
  });


 $(document).ready(function () {
   
  const portInput = $("#plano-box");

  portInput.on("keypress", function (event) {
    const key = event.key;

    if (!/[0-9]/.test(key)) {
      event.preventDefault();
    }
  });
});


function transformMac() {
  const macInput = document.querySelector("#macAddress");
  const macAddress = macInput.value;

  if (macAddress) {
    macInput.value = macAddress.replace(/:/g, '').toUpperCase();
  } else {
    macInput.value = "MAC inválido.";
  }
}

// Adiciona um ouvinte de evento de input para detectar mudanças no campo de entrada
const macInput = document.querySelector("#macAddress");
macInput.addEventListener("input", transformMac);


// Adicione um ouvinte de evento ao botão
const clearInputButton = document.querySelector("#btn-clear-input");
clearInputButton.addEventListener("click", function () {
  const macInput = document.querySelector("#macAddress");
  macInput.value = ""; // Limpa o valor do campo de entrada
});

