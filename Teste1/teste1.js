let numeros = prompt('Digite a quantidade de notas para o cálculo da média:');
let somatoria = 0;
let contador = numeros;

while(contador > 0){
    let notas = parseInt(prompt('Digite a nota:'));
    somatoria += notas;contador --;
    
}

let media = somatoria / numeros;
console.log(media);
alert(`Sua media e:  ${media}`)