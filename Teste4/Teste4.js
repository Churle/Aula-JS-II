var numero = prompt("Por favor, digite um número");

function Aumento(numero) {
    numero = parseInt(numero);

    if (isNaN(numero)) {
        alert('Digite um número inteiro');
        return;
    }

    if (numero > 20) {
        alert('O número inicial já é maior que 20.');
        return;
    }

    var contador = numero;

    while (contador <= 20) {
        alert(`Vamos à contagem: ${contador}`);
        contador++;
        console.log(contador);
    }

    alert('Contagem concluída');
}
