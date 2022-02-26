function scopo() {
    let formulario = document.querySelector('.formulario');

    formulario.addEventListener('submit', function (evt) {
        evt.preventDefault();
        let altura = Number(document.querySelector('.altura').value);
        let peso = Number(document.querySelector('.peso').value);
        if (!altura) {
            Funresultado('Altura inválida', false);
            return;
        }
        if (!peso) {
            Funresultado('Peso inválido', false);
            return;
        }
        let imc = calcIMC(peso, altura);
        let nivelsImc = nivelIMC(imc)

        let msg = `Seu IMC é: ${imc}<br> e seu nivel é: ${nivelsImc}`
        Funresultado(msg);
        if (nivelsImc === 'Abaixo do peso' || nivelsImc === 'Sobrepeso') {
            let cor = document.querySelector('.resultado');
            cor.classList.remove('normal');
            cor.classList.remove('grau-1');
            cor.classList.remove('grau-2');
            cor.classList.remove('grau-3');
            cor.classList.add('meio-grave');
        } else if (nivelsImc === 'Peso normal') {
            let cor = document.querySelector('.resultado');
            cor.classList.remove('meio-grave');
            cor.classList.remove('grau-1');
            cor.classList.remove('grau-2');
            cor.classList.remove('grau-3');
            cor.classList.add('normal');
        } else if (nivelsImc === 'Obesidade grau 1') {
            let cor = document.querySelector('.resultado');
            cor.classList.remove('meio-grave');
            cor.classList.remove('normal');
            cor.classList.remove('grau-2');
            cor.classList.remove('grau-3');
            cor.classList.add('grau-1');
        } else if (nivelsImc === 'Obesidade grau 2') {
            let cor = document.querySelector('.resultado');
            cor.classList.remove('meio-grave');
            cor.classList.remove('normal');
            cor.classList.remove('grau-1');
            cor.classList.remove('grau-3');
            cor.classList.add('grau-2');
        } else if (nivelsImc === 'Obesidade grau 3') {
            let cor = document.querySelector('.resultado');
            cor.classList.remove('meio-grave');
            cor.classList.remove('normal');
            cor.classList.remove('grau-1');
            cor.classList.remove('grau-2');
            cor.classList.add('grau-3');
        }

    });

    function nivelIMC(imc) {
        let nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
        if (imc >= 40) return nivel[5];
        if (imc >= 35) return nivel[4];
        if (imc >= 30) return nivel[3];
        if (imc >= 25) return nivel[2];
        if (imc >= 18.6) return nivel[1];
        if (imc <= 18.5) return nivel[0];
    }

    function calcIMC(peso, altura) {
        return imc = (peso / altura ** 2).toFixed(2)
    }


    function criaP() {
        let p = document.createElement('p');
        return p
    }
    function Funresultado(msg, is) {
        let resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';
        let p = criaP();
        p.innerHTML = msg
        resultado.appendChild(p)

    }
}
scopo()