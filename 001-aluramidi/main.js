function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }

    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}
const listaDeTeclas = document.querySelectorAll('.tecla');

//let (contador = 0); foi declarado dentro do for abaixo.
//for = enquanto uma condição for verdade(true) ele repetirá a rotina estabelecida no {}
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }


}









