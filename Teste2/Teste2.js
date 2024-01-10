document.addEventListener('DOMContentLoaded', function() {
var contador = 1
var tela1 =prompt('Start no contador, Digite sim para comecar');
if (tela1 == null)
    alert('voce digitou em branco vamos iniciar mesmo assim')

while(contador <= 10) {
    let contagem = alert(`Contagem,${contador}`);
    contador ++;
    console.log(contagem)
}
})
