
function ports() {
  const input = document.getElementById('port-box').value;
  const ports = input.split(',').map(num => parseInt(num.trim()));

  const nocPortas = [];
  const filteredPorts = [];
  const closedPorts = [];
  const dynamicPorts = [];

  const closeONU = [1900, 2222,2323,3389,4145,5353,5555,5900,6789,7547,8291,10001,11211,23231,37215,37777,52869]; // Array de números também bloqueados na ONU;
  const filteredIP = [17,161,369,389,445,520,521,853,953,1900,2700,5353,5900,11211,20005];

  ports.forEach(port => {

    //Precisa de Ip Fixo
    if (port >= 1024 && port <= 49151) {
      nocPortas.push(port);
    } 
    
    // Não precisa direcionar
    if (port >= 49152 && port <= 65355) {
        dynamicPorts.push(port);
    }

    //Portas Filtradas
    if ((port >= 135 && port <= 139) || filteredIP.includes(port)) {
        filteredPorts.push(port);
    } 
    
    // Bloqueadas na ONU
    if ((port >= 0 && port <= 1023) || closeONU.includes(port)) {
         closedPorts.push(port);
    }
  });


  let modalText = "";

  if (nocPortas.length > 0) {
      modalText += `Porta Registrada, Requisito -  IP Público. Porta (as): ${nocPortas.join(", ")}<br>`;
  }

  if (filteredPorts.length > 0) {
    modalText += `Porta Filtrada (Filtered) NOC. Porta (as): ${filteredPorts.join(", ")}<br>`;
  }

  if (closedPorts.length > 0) {
    modalText += `Segurança da ONU - Porta Fechada (Closed). Porta (as): ${closedPorts.join(", ")}<br>`;
  }

  if (dynamicPorts.length > 0) {
    modalText += `Portas Não Necessita Direcionar. Porta (as): ${dynamicPorts.join(", ")}<br>`;
  }

  if (modalText === "") {
      modalText = "Portas Não Encontradas.";
  }

  document.getElementById('modal-text').innerHTML = modalText;

  // Mostrar o modal
  const modal = document.getElementById('myModal');
  const span = document.getElementsByClassName('close')[0];
  modal.style.display = "block";

  // Fechar o modal quando o 'x' for clicado
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Fechar o modal quando clicar fora do modal
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
