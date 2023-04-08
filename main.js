function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    } else{
        alert('Elemento não encontrado ou seletor inválido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const som = tecla.classList[1];
    const idElementoSom = `#som_${som}`

    tecla.onclick = function () {
        tocaSom(idElementoSom);
    }

    tecla.onkeydown = function (evento) {
        const code = evento.code
        if (code === 'Space' || code === 'Enter') {
            tecla.classList.add('ativa')
        }
        console.log(evento)
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}
