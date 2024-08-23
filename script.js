/*
Informe se um aluno está aprovado,
de recuperação uo reprovado
seguindo os seguintes critérios:
informar 3 notas.
media > 6: aprovado.
media < 4: reprovado.
 
Obs use o prompt e exiba os resultado em alert.
 
*/
let nome1 = "";
let nota1, nota2, nota3;

nome1 = prompt("digite a nota 1 do aluno 1:");
nota1 = parseFloat(prompt("digite a nota 1 do aluno1:"));
nota2 = parseFloat(prompt("digite a nota 2 do aluno1:"));
nota3 = parseFloat(prompt("digite a nota 3 do aluno1:"));

let media1 = 0;
media1 = (nota1 + nota2 + nota3) /3;

let numero = 0
if (numero > 4) 
    