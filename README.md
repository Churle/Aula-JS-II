<h2> 🎯 Studying JS by trying new tasks and exercises🎯</h2>

*   Task 1 - Loop using while and figure out what is wrong with the code.


<h3> Limitando a resposta no prompt para apenas N#</h3>

* 1-		function obterNumeros(prompt) {
		 	Const numeros = prompt.match(/\d+\g);
 			return numeros ? Numeros.map(number): [];
 		}
		
		const prompt=prompt(“digite algo: “);
		const numeros =	obterNumeros(prompt);
		console.log(“Numeros encontrados: “, numeros);


* 2-		Converter a resposta para um numero:

			var numero=parseInt(variavel);

* 3-		Removendo espacos em branco : 

			Pode ser uma boa ideia usar trim() para remover 			espaços em branco extras. 
		
		Tornando ela minuscula :
		resposta1 = resposta1.	trim().toLowerCase();
		// Remova espaços em branco torne a string minúscula 

* 4-		Verificando se o prompt foi cancelado pelo usuario:

 // Verificar se o usuário pressionou "Cancelar" na janela do prompt if (resposta1 === "") { 

<h3> Usando WHILE </h3>

*	!= este simbolo significa nao igual. 

		 Ex: While (chute != numero_secreto) {
			chute =prompt(‘escolha um numero entre 1 e 10’);

				if (chute == numero_secreto) {
				alert(‘voce acertou’);
				}else{
					if(chute > numero_secreto){
					alert(‘ o numero e menor’);
					}else{
						alert(‘ o numero e maior’);
				}
			}
		}

	OBS → Segurar shift+{ e usado para facilitar a identacao.

*	OBS.2 → 	Criar uma var tentativas = 1; , de maneira que 			marquemos as tentivas a partir da primeira. 
			Lembrando que o ideal e escrever apos o usuario 			errar.
		Tentativas = tentativas + 1; 
		e igual escrever tentativas++ .

		Podendo inserir em alert(‘voce acertou 
		${numero_secreto} em ${tentativas} tentativas’); 

	OBS.3→ Em java script e o operador de incremento!
<h3> Diferenca entre VAR e Let </h3>

*	Var tem escopo de funcao enquanto let tem escopo de bloco
*	var e usado 

<h3> Utilizando parseInt corretamente</h3> 

*	parseInt e usado para transformar uma string em numero 	inteiro.

	E muito utilizada para quando desejamos um numero de um 	valor retornado de uma funcao prompt porque sempre vem 	uma string dele.

<h3> Operadores Logicos </h3> 

*	AND (&&)
	O operador AND, representado pelos símbolos "&&", é utilizado para combinar duas condições e 	avaliar se ambas são verdadeiras. Se ambas as condições forem verdadeiras, o resultado será… 	verdadeiro. Caso contrário, logicamente será falso. Por exemplo:
let idade = 25;
let possuiCarteira = true;

// se idade é maior que 18 e possui carteira…
if (idade > 18 && possuiCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}

*	OR (||)
	O operador OR, representado pelos símbolos "||", é usado para verificar se pelo menos uma das 	condições é verdadeira. Se uma das condições for verdadeira, o resultado será verdadeiro. Se ambas 	forem falsas, o resultado será falso. Veja um exemplo:
let temMaça = false;
let temBanana = true;

// se tem maça ou tem banana…
if (temMaça || temBanana) {
  console.log("Você tem frutas!");
} else {
  console.log("Não tem frutas.");
}
*	Outros tipos de operadores lógicos
Operador
Nome
Exemplo
Resultado
==
Igual
A == B
Verdadeiro se A for igual a B
!=
Diferente
A != B
Verdadeiro se A não for igual a B
<
Menor que
A < B
Verdadeiro se A for menor que B
>
Maior que
A > B
Verdadeiro se A for maior que B
<=
Menor ou igual
A <= B
Verdadeiro se A for menor ou igual a B.
>=
Maior ou igual
A >= B
Verdadeiro se A for maior ou igual a B.
Operadores Lógicos
Operador
Nome
Exemplo
Resultado
&&
E / AND
(A > B) && (B == C)
Verdadeiro se A fo maior que B E B for igual a C
ǀǀ
OU / OR
(A > B) ǀǀ (B == C)
Verdadeiro se A for maior que B OU B for igual a C
!
NEGAÇÃO
!(A == B)
Verdadeiro se A NÃO for igual a B


