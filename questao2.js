// Débora se inscreveu em uma rede social para se manter em contato com seus amigos. A página de cadastro exigia o preenchimento dos campos de nome e senha, porém a senha precisa ser forte. O site considera uma senha forte quando ela satisfaz os seguintes critérios:
// Possui no mínimo 6 caracteres.
// Contém no mínimo 1 digito.
// Contém no mínimo 1 letra em minúsculo.
// Contém no mínimo 1 letra em maiúsculo.
// Contém no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&*()-+
// Débora digitou uma string aleatória no campo de senha, porém ela não tem certeza se é uma senha forte. Para ajudar Débora, construa um algoritmo que informe qual é o número mínimo de caracteres que devem ser adicionados para uma string qualquer ser considerada segura.

// Exemplo:
// Entrada:
// Ya3

// Saída:
// 3

let password = '12rA*'

let caracterMin = 6;
num = new RegExp(/[0-9]/);
let letrasMinusculas = /[a-z]/;
let letrasMaiusculas = /[A-Z]/;
let caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

let regex_num = Boolean(num.exec(password));
let regex_letrasMinusculas = password.match(letrasMinusculas);
let regex_letrasMaiusculas = password.match(letrasMaiusculas);
let regex_caracteresEspeciais = password.match(caracteresEspeciais);

if (password.length < 6) {
    console.log(6 - password.length);
} else if (password.length >= 6
    && regex_num == true
    && regex_letrasMinusculas != null
    && regex_letrasMaiusculas != null
    && regex_caracteresEspeciais != null) {
    console.log("Senha segura!")
} else {
    console.log("Senha insegura!")
}

