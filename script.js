function abrirCarta(sobre){
  sobre.classList.add("abierto");
  document.getElementById("carta").classList.add("abierta");
}

function reproducirMusica(){
  let musica = document.getElementById("musica");

  if(musica.paused){
    musica.play();
  }else{
    musica.pause();
  }
}