let operacao = prompt("Digite a operação desejada: +, -, /, *");
if (operacao == '+' || operacao == '-' || operacao == '/' || operacao == '*') {
    var num1 = prompt("Primeiro numero");
    var num2 = prompt("Segundo numero");
    var result;
} else {
    alert("Impossível calcular!");
}


if (!isNaN(num1) && !isNaN(num2)) {
    num1 = +(num1);
    num2 = +(num2);
    switch (operacao) {
        case '+':
            console.log(num1);
            console.log(num2);
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            if (num2 != 0) {
                result = num1 / num2;
            } else {
                result = "Não existe - Divisao por 0!"
            }
            break;
        case '*':
            result = num1 * num2;
            break;
    }
    alert("Resultado: " + result);
}

