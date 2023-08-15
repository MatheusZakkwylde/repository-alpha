document.getElementById('btn-clik-p').addEventListener('click', function() {
 
  const plano = new Mbps (document.getElementById('plano-box').value);

  let modalText = 
  `<span class='black-text'>Plano: ${plano.getMbps} Mb/s (Megabits Por Segundo) Taxa de Transferência.  </span><br><br>
  <span class='black-text'> Dowload 100 % : </span>
  <span class='gray-text'> ${plano.getMbps} Mb/s (Megabits Por Segundo) Taxa de Transferência.</span><br>
  <span class='black-text'> Garantia 80 % :</span>
  <span class='gray-text'> ${plano.getDownloadGuarantee} Mb/s (Megabits Por Segundo) Taxa de Transferência.</span><br>
  <span class='black-text'>Taxa de Transferência De Dados Teórico (Baixar).</span>
  <span class='gray-text'> = ${plano.getDownloadKBps}  KB/s ou ${plano.getDownloadMbps} MB/s. </span><br><br>
  <span class='black-text'> Upload 50% : </span>
  <span class='gray-text'>${plano.getUpload} Mb/s (Megabits Por Segundo) Taxa de Transferência.</span><br>
  <span class='black-text'> Garantia 80%: </span>
  <span class='gray-text'>${plano.getUploadGuarantee} Mb/s (Megabits Por Segundo) Taxa de Transferência.</span><br>
  <span class='black-text'>Taxa de Transferência De Dados Teórico (Enviar).</span>
  <span class='gray-text'> = ${plano.getUploadKBps}  KB/s ou ${plano.getUploadMbps} MB/s </span>`;

  document.getElementById('modal-text').innerHTML = modalText;
  document.getElementById('plano-box').value ="";
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
});


class Mbps {
  #Mbps;
  #download;
  #upload;
  #downloadKBps;
  #uploadKBps;
  #downloadMBps;
  #uploadMBps

  constructor(Mbps) {
      this.#Mbps = Mbps; // Adicionando o plano atual.
      this.#download = this.#Mbps; //Obtendo a entrega de 100% de Download.
      this.#upload = (50/100) * this.#Mbps; // Obtendo a entrega de 50% do Upload.
      this.#downloadMBps = (this.#download / 8).toFixed(1); // transferẽncia de dados em Mbps
      this.#uploadMBps = (this.#upload /8).toFixed(1); // transferẽncia dados em Mbps
      this.#downloadKBps = (this.#downloadMBps * 1024) / 8; // taxa de transferência de dados Downlioad KBps.
      this.#uploadKBps = (this.#uploadMBps * 1024) / 8; // taxa de transferência de dados Upload KBps.
    }

  get getMbps (){
      return this.#Mbps;
  }

  get getDownloadGuarantee (){ 
      return (80/100) * this.#download;
  }

  get getUpload (){
      return this.#upload;
  }

  get getUploadGuarantee (){
      return (80/100) * this.#upload;
  }

  get getDownloadKBps (){
    return this.#downloadKBps;
  }

  get getUploadKBps(){
    return this.#uploadKBps;
  }

  get getDownloadMbps (){
    return this.#downloadMBps;
  }

  get getUploadMbps(){
    return this.#uploadMBps;
  }
}
 
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
  document.getElementById('port-box').value ="";
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