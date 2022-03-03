function tocaTodasTeclas(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".botao");

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const teclas = listaDeTeclas[contador];
  const instrução = teclas.classList[1];
  const idAudio = `#som_${instrução}`;

  teclas.onclick = function () {
    tocaTodasTeclas(idAudio);
  };
}
