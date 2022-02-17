// Duas palavras podem ser consideradas anagramas de si mesmas se as letras de uma palavra podem ser realocadas para formar a outra palavra. Dada uma string qualquer, desenvolva um algoritmo que encontre o número de pares de substrings que são anagramas.

// Exemplo:
// Exemplo 1)
// Entrada:
// ovo

// Saída:
// 2

// Explicação:
// A lista de todos os anagramas pares são: [o, o], [ov, vo] que estão nas posições [[0], [2]], [[0, 1], [1, 2]] respectivamente. 

// Exemplo 2)
// Entrada:
// ifailuhkqq

// Saída:
// 3

// Explicação:
// A lista de todos os anagramas pares são: [i, i], [q, q] e [ifa, fai] que estão nas posições [[0], [3]], [[8],  [9]] e [[0, 1, 2], [1, 2, 3]]

let word = "ovo";
let anagramas = [];

for (let i = 0; i < word.length; i++) {
    for (let j = 1; j < word.length; j++) {
        if (word.charAt(i) == word.charAt(j) && i != j && i < j) {
            if (word.charAt(i) == word.charAt(i + 1)) {
                let x = word.substring(i, i + 1);
                anagramas.push(x);
            } else {
                let y = word.substring(i, j);
                let z = word.substring(i + 1, j + 1);
                let h = word.substring(i, i + 1);
                anagramas.push(h);
                anagramas.push(y);
                anagramas.push(z);
            }
        }
    }
}
console.log(anagramas.length);
