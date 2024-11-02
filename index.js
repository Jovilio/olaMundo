
window.addEventListener('scroll', function () {
    // Obter a posição do scroll vertical
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    var s2 = document.querySelector('.s2');

    if (scrollY >= 100) {
        // console.log("aparecer sessão 1");
        // s2.style.background = "green";
        // s2.setAttribute('display', 'flex')
    } else {

        // s2.style.background = "#68001a";

    }
    // Obter a posição do scroll horizontal (caso necessário)
    // const scrollX = window.scrollX || document.documentElement.scrollLeft;

    // console.log(`Posição do scroll vertical: ${scrollY}`);
    // console.log(`Posição do scroll horizontal: ${scrollX}`);
});

