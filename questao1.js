// Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços. A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.

// Exemplo:
// Entrada:
// n = 6

// Saída:
//           *
//         **
//       ***
//     ****
//   *****
// ******

let n = 6;
let indexColumn;
let symbolo = '*';
let inputLine = '';
let inputPosition = n;

for (let index = 0; index < n; index += 1) {
    for (indexColumn = 0; indexColumn <= n; indexColumn += 1) {
        if (indexColumn < inputPosition) {
            inputLine = inputLine + ' ';
        } else {
            inputLine = inputLine + symbolo;
        }
    }
    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
}