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
let nota1 =0, nota2=0;
let mensagem ="";

nome1 = prompt("digite o nome do aluno:");
nota1 = parseFloat(prompt("digite a nota 1 do aluno:"));
nota2 = parseFloat(prompt("digite a nota 2 do aluno:"));

let media = 0;
media = (nota1 + nota2) /2;

if (media >7) {
    mensagem = "Aprovado"
}

else if(media >=5){
    mensagem = "Recuperação"
}
else  {
    mensagem = "Reprovado"
}

alert(nome1 + mensagem);

