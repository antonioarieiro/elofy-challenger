/*
Crie uma função que teste se a palavra é um palíndromo e retorne true ou false.
Não é permitido usar método array.reverse.

Exemplos de palíndromo: Anilina, Arara, Esse, Reviver

Tempo máximo de teste: 30 min


*/

 function checkPalindrome(word:string) {
    var str = word.toLocaleLowerCase()
    for(var a = 0; a < str.length / 2; a++) {
      if(str[a] != str[str.length - a - 1]) {
        console.log(false);
      }
    }
    console.log(true)
  }
