let numeros = prompt('Digite a quantidade de números para o cálculo da média:');
let somatoria = 0;
let contador = numeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;contador --;
    
}

let media = somatoria / numeros;

console.log(media);