var n = prompt("Por favor, digite um número");

function Aumento(n) {
    n = parseInt(n);

    if (isNaN(n)) {
        alert('Digite um número inteiro');
        return;
    }

    if (n >= 19) {
        alert('O número inicial já é maior ou igual a 20.');
        return;
    }

    var contador = n;

    while (contador <= 19) {
        alert(`Vamos à contagem: ${contador}`);
        contador++;
        console.log(contador);
    }

    alert('Contagem concluída');
}

Aumento(n);
