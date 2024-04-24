function Hamburguer(){
  const lista1 = window.document.getElementById('ListaHamburguer');
  const lista2 = window.document.getElementById('ContatosHamburguer');
  const lista3 = window.document.getElementById('HamburguerRetirar');
  const listaStyle = window.getComputedStyle(lista1);
  
  if (listaStyle.display === 'none') {
    lista1.style.display = 'block';
    lista2.style.display = 'none';
    lista3.style.display = 'none'
  } else {
    lista1.style.display = 'none';
  }
}
function ContatoMenu(){
  const lista1 = window.document.getElementById('ListaHamburguer');
  const lista2 = window.document.getElementById('ContatosHamburguer');
  const lista3 = window.document.getElementById('HamburguerRetirar');
  const listaStyle = window.getComputedStyle(lista2);

  if (listaStyle.display === 'none') {
    lista2.style.display = 'grid';
    lista1.style.display = 'none';
    lista3.style.display = 'none'
  } else {
    lista2.style.display = 'none';
  }
}
function RetirarMenu(){
  const lista1 = window.document.getElementById('ListaHamburguer');
  const lista2 = window.document.getElementById('ContatosHamburguer');
  const lista3 = window.document.getElementById('HamburguerRetirar');
  const listaStyle = window.getComputedStyle(lista3)

  if(listaStyle.display === 'none'){
    lista3.style.display = 'block'
    lista1.style.display = 'none';
    lista2.style.display = 'none';
  }else{
    lista3.style.display = 'none'
  }
}
function ContatoRetirar(){
  RetirarMenu()
  ContatoMenu()
}
function Wpp(){
  const dataAtual = new Date();
  const horaAtual = dataAtual.getHours();
  var BDTN = 'Olá'
  if (horaAtual >= 18 || horaAtual <= 6) {
    BDTN = 'Boa noite';
  } else if (horaAtual >= 7 && horaAtual <= 12) {
    BDTN = 'Bom dia';
  } else {
    BDTN = 'Boa tarde';
  }
  const link = "https://wa.me/5511986120014?text=" + encodeURIComponent(BDTN + ", Rodrigo. Entro em contato pelo Cátalogo!")
  window.open(link, '_blank');
  
}



const placadevideo = document.getElementById('PlacaDeVideo');
const Processadores = document.getElementById('Processadores');
const MemóriaRam = document.getElementById('MemóriaRam');
const Headset = document.getElementById('Headset');
const Mouse = document.getElementById('Mouse');
const Mousepad = document.getElementById('Mousepad');
const HDD = document.getElementById('HDD');
const Outros = document.getElementById('Outros');

const CLASSPlacaDeVideo = document.getElementsByClassName('PlacaDeVideo');
const CLASSProcessadores = document.getElementsByClassName('Processadores');
const CLASSMemoriaRam = document.getElementsByClassName('MemoriaRam');
const CLASSHeadset = document.getElementsByClassName('Headset');
const CLASSMouse = document.getElementsByClassName('Mouse');
const CLASSMousePad = document.getElementsByClassName('MousePad');
const CLASSHDD = document.getElementsByClassName('HDD');
const CLASSOutros = document.getElementsByClassName('Outros');

const Filtro = window.document.getElementById('Filtro');


//Se um item deixar de exitir no catalog, deve ser comnnetado os codigo do que se refere, assim como no hamburguer
placadevideo.addEventListener('click', function() {
  for (let i = 0; i < CLASSPlacaDeVideo.length; i++) {
    CLASSPlacaDeVideo[i].style.display = 'grid';
  }
  for (let i = 0; i < CLASSProcessadores.length; i++) {
    CLASSProcessadores[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMemoriaRam.length; i++) {
    CLASSMemoriaRam[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSHeadset.length; i++) {
    CLASSHeadset[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMouse.length; i++) {
    CLASSMouse[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMousePad.length; i++) {
    CLASSMousePad[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSHDD.length; i++) {
    CLASSHDD[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSOutros.length; i++) {
    CLASSOutros[i].style.display = 'none';
  }
  Filtro.style.display = 'Block'
  Hamburguer()
});
Processadores.addEventListener('click', function() {
  for (let i = 0; i < CLASSPlacaDeVideo.length; i++) {
    CLASSPlacaDeVideo[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSProcessadores.length; i++) {
    CLASSProcessadores[i].style.display = 'grid';
  }
  for (let i = 0; i < CLASSMemoriaRam.length; i++) {
    CLASSMemoriaRam[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSHeadset.length; i++) {
    CLASSHeadset[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMouse.length; i++) {
    CLASSMouse[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMousePad.length; i++) {
    CLASSMousePad[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSHDD.length; i++) {
    CLASSHDD[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSOutros.length; i++) {
    CLASSOutros[i].style.display = 'none';
  }
  Filtro.style.display = 'block'
  Hamburguer()
});
MemóriaRam.addEventListener('click', function() {
  for (let i = 0; i < CLASSPlacaDeVideo.length; i++) {
    CLASSPlacaDeVideo[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSProcessadores.length; i++) {
    CLASSProcessadores[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMemoriaRam.length; i++) {
    CLASSMemoriaRam[i].style.display = 'grid';
  }
  for (let i = 0; i < CLASSHeadset.length; i++) {
    CLASSHeadset[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMouse.length; i++) {
    CLASSMouse[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMousePad.length; i++) {
    CLASSMousePad[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSHDD.length; i++) {
    CLASSHDD[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSOutros.length; i++) {
    CLASSOutros[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSOutros.length; i++) {
    CLASSOutros[i].style.display = 'none';
  }
  Filtro.style.display = 'block'
  Hamburguer()
});
Headset.addEventListener('click', function() {
  for (let i = 0; i < CLASSPlacaDeVideo.length; i++) {
    CLASSPlacaDeVideo[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSProcessadores.length; i++) {
    CLASSProcessadores[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMemoriaRam.length; i++) {
    CLASSMemoriaRam[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSHeadset.length; i++) {
    CLASSHeadset[i].style.display = 'grid';
  }
  for (let i = 0; i < CLASSMouse.length; i++) {
    CLASSMouse[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMousePad.length; i++) {
    CLASSMousePad[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSHDD.length; i++) {
    CLASSHDD[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSOutros.length; i++) {
    CLASSOutros[i].style.display = 'none';
  }
  Filtro.style.display = 'block'
  Hamburguer()
});
Mouse.addEventListener('click', function() {
  for (let i = 0; i < CLASSPlacaDeVideo.length; i++) {
    CLASSPlacaDeVideo[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSProcessadores.length; i++) {
    CLASSProcessadores[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMemoriaRam.length; i++) {
    CLASSMemoriaRam[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSHeadset.length; i++) {
    CLASSHeadset[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMouse.length; i++) {
    CLASSMouse[i].style.display = 'grid';
  }
  for (let i = 0; i < CLASSMousePad.length; i++) {
    CLASSMousePad[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSHDD.length; i++) {
    CLASSHDD[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSOutros.length; i++) {
    CLASSOutros[i].style.display = 'none';
  }
  Filtro.style.display = 'block'
  Hamburguer()
});
/*Mousepad.addEventListener('click', function() {
  for (let i = 0; i < CLASSPlacaDeVideo.length; i++) {
    CLASSPlacaDeVideo[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSProcessadores.length; i++) {
    CLASSProcessadores[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMemoriaRam.length; i++) {
    CLASSMemoriaRam[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSHeadset.length; i++) {
    CLASSHeadset[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMouse.length; i++) {
    CLASSMouse[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSHDD.length; i++) {
    CLASSHDD[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSOutros.length; i++) {
    CLASSOutros[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMousePad.length; i++) {
    CLASSMousePad[i].style.display = 'grid';
  }
  Filtro.style.display = 'block'
  Hamburguer()
});*/
/*HDD.addEventListener('click', function() {
  for (let i = 0; i < CLASSPlacaDeVideo.length; i++) {
    CLASSPlacaDeVideo[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSProcessadores.length; i++) {
    CLASSProcessadores[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMemoriaRam.length; i++) {
    CLASSMemoriaRam[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSHeadset.length; i++) {
    CLASSHeadset[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMouse.length; i++) {
    CLASSMouse[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMousePad.length; i++) {
    CLASSMousePad[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSHDD.length; i++) {
    CLASSHDD[i].style.display = 'grid';
  }
  for (let i = 0; i < CLASSOutros.length; i++) {
    CLASSOutros[i].style.display = 'none';
  }
  Filtro.style.display = 'block'
  Hamburguer()
});*/
Outros.addEventListener('click', function() {
  for (let i = 0; i < CLASSPlacaDeVideo.length; i++) {
    CLASSPlacaDeVideo[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSProcessadores.length; i++) {
    CLASSProcessadores[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMemoriaRam.length; i++) {
    CLASSMemoriaRam[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSHeadset.length; i++) {
    CLASSHeadset[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMouse.length; i++) {
    CLASSMouse[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSMousePad.length; i++) {
    CLASSMousePad[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSHDD.length; i++) {
    CLASSHDD[i].style.display = 'none';
  }
  for (let i = 0; i < CLASSOutros.length; i++) {
    CLASSOutros[i].style.display = 'grid';
  }
  Filtro.style.display = 'Block'
  Hamburguer()
});
Filtro.addEventListener('click', function() {
  for (let i = 0; i < CLASSPlacaDeVideo.length; i++) {
    CLASSPlacaDeVideo[i].style.display = 'grid';
  }
  for (let i = 0; i < CLASSProcessadores.length; i++) {
    CLASSProcessadores[i].style.display = 'grid';
  }
  for (let i = 0; i < CLASSMemoriaRam.length; i++) {
    CLASSMemoriaRam[i].style.display = 'grid';
  }
  for (let i = 0; i < CLASSHeadset.length; i++) {
    CLASSHeadset[i].style.display = 'grid';
  }
  for (let i = 0; i < CLASSMouse.length; i++) {
    CLASSMouse[i].style.display = 'grid';
  }
  for (let i = 0; i < CLASSMousePad.length; i++) {
    CLASSMousePad[i].style.display = 'grid';
  }
  for (let i = 0; i < CLASSHDD.length; i++) {
    CLASSHDD[i].style.display = 'grid';
  }
  for (let i = 0; i < CLASSOutros.length; i++) {
    CLASSOutros[i].style.display = 'grid';
  }
  Filtro.style.display = 'none'
});


/*chatgpt*/ 
document.getElementById("pesquisa").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    let termoPesquisa = event.target.value.toLowerCase();

    // Verificar o termo de pesquisa e disparar as funções correspondentes
    if (termoPesquisa.includes("placa de video") || termoPesquisa.includes("placa") || termoPesquisa.includes("video") || termoPesquisa.includes("gpu")) {
      placadevideo.click();
      Hamburguer();
    } else if (termoPesquisa.includes("processador") || termoPesquisa.includes("processadores") || termoPesquisa.includes("cpu")) {
      Processadores.click();
      Hamburguer();
    } else if (termoPesquisa.includes("memoria ram") || termoPesquisa.includes("memoria") || termoPesquisa.includes("ram") || termoPesquisa.includes("ddr")) {
      MemóriaRam.click();
      Hamburguer();
    } else if (termoPesquisa.includes("headset") || termoPesquisa.includes("fone") || termoPesquisa.includes("head") || termoPesquisa.includes("set")) {
      Headset.click();
      Hamburguer();
    } else if (termoPesquisa.includes("mouse")) {
      Mouse.click();
      Hamburguer();
    } else if (termoPesquisa.includes("pad") || termoPesquisa.includes("mousepad")) {
      Mousepad.click();
      Hamburguer();
    }

    // Limpar o campo de pesquisa após a pesquisa
    event.target.value = "";
  }
});



function abrirchat(){
  let chat = window.document.getElementById('chat')
  let listaStyle = window.getComputedStyle(chat);
  if (listaStyle.display == 'none'){
      chat.style.display = 'block'
  }else{
      chat.style.display = 'none'
  }
}
function atualizarHora() {
  let relogio = window.document.getElementById('relogio')
  const agora = new Date();
  const hora = agora.getHours();
  const minuto = agora.getMinutes().toString().padStart(2, '0');
  relogio.innerHTML = `${hora}:${minuto}`
}
setInterval(atualizarHora, 1000)
function EnviarWpp(){
  let nome = window.document.getElementById('nome').value;
  let assunto = window.document.getElementById('Assunto').value
  const dataAtual = new Date();
  const horaAtual = dataAtual.getHours();
  var BDTN = 'Olá'
  if (horaAtual >= 18 || horaAtual <= 6) {
    BDTN = 'Boa noite';
  } else if (horaAtual >= 7 && horaAtual <= 12) {
    BDTN = 'Bom dia';
  } else {
    BDTN = 'Boa tarde';
  }
  let link = "https://wa.me/5511986120014?text=" + encodeURIComponent(BDTN + ", Rodrigo. Me chamo, "+ nome +". Entro em contato pelo Cátalogo e gostaria de falar sobre "+ assunto +". Obgd!")
  
  window.open(link, '_blank');
}

function VerificarTopo() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop === 0) {
    Topo.style.display = 'none';
  } else {
    Topo.style.display = 'block';
  }
}
setInterval(VerificarTopo, 500)
var Topo = document.getElementById('Topo');
Topo.addEventListener('click', function() {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});