//1 - Capturamos o formulário no HTML.
const form = document.querySelector('#form');

//2 - Adcionamos um escutador no evento de submit.
form.addEventListener('submit', function (e) {

    //3 - Previnimos o default.
    e.preventDefault();

    //4 - Campturamos os dados dos inputs do HTML.
    const inputNome = e.target.querySelector('#nome');
    const inputAltura = e.target.querySelector('#altura');
    const inputPeso = e.target.querySelector('#peso');

    //5 - Convertemos os dados dos inputs para Number.
    const nome = inputNome.value;
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //6 - Checamos se a constante "peso" é um Number, se for uma NaN,
    //colocamos a flag "false" na função "setResultado".
    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }

    //7 - Checamos se a constante "altura" é um Number, se for uma NaN,
    //colocamos a flag "false" na função "setResultado".
    if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }

    //8 - Declaramos a constante do IMC que utiliza uma função 
    //específica para calcula-lo.
    const imc = getImc(peso, altura);

    //9 - Declaramos a constante do nivel de IMC que também possui sua
    //função específica.
    const nivelImc = getNivelImc(imc);

    //10 - Declaramos a constante da mensagem à ser exibida.
    const msg = `${nome}, seu IMC é: <strong>${imc}</strong> (${nivelImc})`;

    //11 - Se chegamos até aqui e não paramos no ponto 6 ou 7,
    //setamos o resultado para "true"
    setResultado(msg, true)

});

//12 - Criamos a Função de Nível de IMC.
function getNivelImc(imc) {

    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2',
        'Obesidade Grau 3'];

    if (imc > 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}
//13 - Criamos a função que calcula o IMC.
function getImc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

//14 - Criamos a função que cria o parágrafo da mensagem do resultado.
function criaP() {
    const p = document.createElement('p'); //Cria elemento de HTML.
    return p;
}

//15 - Função que seta o resultado. Ela recebe uma mensagem e confirma se
//ele é válido.
function setResultado(msg, isValid) {

    //16 - Selecionamos a div de resultado.
    const resultado = document.querySelector('#resultado');

    //17 - Zeramos o campos resultado no HTML.
    resultado.innerHTML = '';

    //18 - Criamos um parágrafo com a função criaP(14).
    const p = criaP();

    //19 - Chegamos a flag enviada em 6, 7 ou 11. Se for verdadeira,
    //o background será verde, false, será vermelho.
    if (isValid) {
        p.classList.add('resultado-padrao', 'bkg-verde');
    } else {
        p.classList.add('resultado-padrao', 'bkg-vermelho');
    }

    //20 - Setamos o innerHTML com a mensagem.
    p.innerHTML = msg;

    //21 - Adicionamos o parágrafo ao nosso resultado.
    resultado.appendChild(p);
}

