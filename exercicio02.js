let dia_da_semana = prompt("informe o dia da semana");
let mensagem = "";

if (dia_da_semana == 1) {
    mensagem = "domingueira"
}
else if (dia_da_semana == 2) {
    mensagem = "segunda-feira"
}
else if (dia_da_semana == 3) {
    mensagem = "terça-feira"
}
else if (dia_da_semana == 4) {
    mensagem = "quarta-feira"
}
else if (dia_da_semana == 5) {
    mensagem = "tbt"
}
else if (dia_da_semana == 6) {
    mensagem = "sextou"
}
else if (dia_da_semana == 7) {
    mensagem = "sabadinho"
}
else {
    mensagem = "esse_dia_ainda_nao_existe"
}
alert(mensagem)
