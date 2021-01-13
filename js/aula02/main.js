const numeroAleatorio= Math.floor(Math.random() * 100) + 1;

let label = document.querySelector('.form label')
let palpites = document.querySelector('.palpites');
let ultimoResultado = document.querySelector('.ultimoResultado');
let baixoOuAlto = document.querySelector('.baixoOuAlto');

let envioPalpite = document.querySelector('.envioPalpite');
let campoPalpite = document.querySelector('.campoPalpite');

let contagemPalpites = 1;
let botaoReinicio;

envioPalpite.addEventListener('click', function () {
    let palpite = campoPalpite.value;
    campoPalpite.value = ``
    if (palpite == numeroAleatorio) {
        ultimoResultado.textContent = "Parabéns! Você ganhou."
        fimRodada()
    } else {
        if (contagemPalpites < 10) {
            ultimoResultado.textContent = "Ops! Você errou."
            if (palpite > numeroAleatorio) {
                baixoOuAlto.textContent = `Seu plapite foi alto.`
            } else {
                baixoOuAlto.textContent = `Seu plapite foi baixo.`
            }
            palpites.textContent += ` ${palpite}`
            contagemPalpites += 1
        } else {
            fimRodada()
        }
    } 
    
});

function fimRodada() {
    label.style.display = 'None'; 
    ultimoResultado.textContent = `Fim de jogo!`
    baixoOuAlto.textContent = ``
    palpites.textContent = ``
    envioPalpite.style.display = 'None'; 
    campoPalpite.style.display = 'None';

    botaoReinicio = document.createElement('button')
    botaoReinicio.textContent = `Reiniciar`
    document.body.appendChild(botaoReinicio)

    botaoReinicio.addEventListener('click', reiniciarJogo)
}


function reiniciarJogo () {
    botaoReinicio.parentNode.removeChild(botaoReinicio);

    label.style.display = 'inline'; 
    ultimoResultado.textContent = ``
    baixoOuAlto.textContent = ``
    palpites.textContent = ``
    envioPalpite.style.display = 'inline';
    campoPalpite.style.display = 'inline';

    contagemPalpites = 1;
    const numeroAleatorio= Math.floor(Math.random() * 100) + 1;
}