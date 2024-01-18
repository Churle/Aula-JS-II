var contador = prompt('Digite um número, vamos começar a subtração');

function regressivo(contador) {
    contador = parseInt(contador);

    if (isNaN(contador)) {
        alert('Por favor, digite um número válido.');
        return;
    }

    while (contador > 0) {
        alert(`Vamos à contagem: ${contador}`);
        contador--;
        console.log(contador);
    }

    alert('Contagem regressiva concluída!');
}

regressivo(contador);