
function tocaSom (seletorAudio) {

 const elemento = document.querySelector(seletorAudio);

 if (elemento != null && elemento.localName === 'audio') {
    
    elemento.play();
    }
    else {
        alert('Elemento não encontrado ou seletor inválido');
    }
 }



const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
     const instrumeto = tecla.classList[1];
     const idAudio = `#som_${instrumeto}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    tecla.onkeydown = function (evento) {
        console.log(evento);
        if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
