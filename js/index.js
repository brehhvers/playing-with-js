let nota1, nota2, nota3, soma, media;

nota1 = prompt("Digite a primeira nota");

if (nota1 !== null && !isNaN(nota1)) {
    nota2 = prompt("Digite a segunda nota");

    if (nota2 !== null && !isNaN(nota2)) {
        nota3 = prompt("Digite a terceira nota");

        if (nota3 !== null && !isNaN(nota3)) {
            soma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
            media = soma / 3;

            alert("A media dos números é: " + media.toFixed(2));
        } else {
            alert("Impossível calcular com valores não numéricos!");
        }
    } else {
        alert("Impossível calcular com valores não numéricos!");
    }
} else {
    alert("Impossível calcular com valores não numéricos!");

}




