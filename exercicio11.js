switch (opcao) {
    case "1":
        celsius = parseInt("Informe quantos graus celsius a converter!");
        celsius = parseFloat(
            prompt("Informe quantos graus celsius a converter!"));
        fahrenheit = (celsius * 9 / 5) + 32;
        alert(`${celsius}ºC representa ${fahrenheit.toFixed(2)}ºF!`);
        break;
    case "2":
        fahrenheit = parseInt("Informe quantos graus fahrenheit a converter!");
        fahrenheit = parseFloat(
            prompt("Informe quantos graus fahrenheit a converter!"));
        celsius = (fahrenheit - 32) * 5 / 9;
        alert(`${fahrenheit}ºF representa ${celsius.toFixed(2)}ºC!`);
        break; 
        }