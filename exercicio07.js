let texto_menu = `selecione sua altura:
                1 - 1.70
                2 - 1.60`
let idade = parseFloat(prompt`informe sua idade`);
//converte string em numero inteiro 
let sua_altura = parseInt(prompt(texto_menu));
let altura;

    switch (sua_altura) {
    case 1:
        altura = "pode entrar"
        break;
    case 2: 
    if (idade <18)
        altura = "não pode entrar"
    
    else if (idade >=18) 
        altura = "pode entrar"
        break;
    default:
        altura = "invalida"
        break;
    }
alert(`você ${altura}`)