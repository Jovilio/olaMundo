window.addEventListener('scroll', function () {
    const scrollY = window.scrollY; // Posição do scroll


    const h1 = document.getElementById('nome');
    const h2 = document.getElementById('cargo');

    const tamanhoInicialH1 = 60; // em pt
    const tamanhoInicialH2 = 30; // em pt
    const tamanhoMinimoH1 = 12; // em pt
    const tamanhoMinimoH2 = 10; // em pt

    const fatorH1 = (tamanhoInicialH1 - tamanhoMinimoH1) / 360;
    const fatorH2 = (tamanhoInicialH2 - tamanhoMinimoH2) / 360;

    const novoTamanhoH1 = Math.max(tamanhoInicialH1 - scrollY * fatorH1, tamanhoMinimoH1);
    const novoTamanhoH2 = Math.max(tamanhoInicialH2 - scrollY * fatorH2, tamanhoMinimoH2);

    h1.style.fontSize = `${novoTamanhoH1}pt`;
    h2.style.fontSize = `${novoTamanhoH2}pt`;
});


const boasVindas = document.querySelector('.boasVindas');
const mensagens = [
    'Olá Mundo',
    'Role para baixo',
    
];
let indice = 0;

setInterval(() => {
    // Define o conteúdo da mensagem atual
    boasVindas.textContent = mensagens[indice];

    // Incrementa o índice para a próxima mensagem
    indice = (indice + 1) % mensagens.length; // Reinicia para 0 ao chegar ao fim do array
}, 5000); // Intervalo de 2000ms (2 segundos)

