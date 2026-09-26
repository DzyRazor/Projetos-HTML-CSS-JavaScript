function calcular() {
    
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);

    let resultado = (nota1 + nota2) / 2;

    if (resultado >= 7) {
        document.getElementById("titulo").textContent = "Aprovado!";
    } else if (resultado >= 5) {
        document.getElementById("titulo").textContent = "Recuperação";
    } else {
        document.getElementById("titulo").textContent = "Reprovado"
    }

    document.getElementById("resultado").textContent = "Sua média foi: " + resultado;

    document.getElementById("modal").style.display = "flex";
}

function calcularNovamente() {
    document.getElementById("modal").style.display = "none";

    document.getElementById("nota1").value ="";
    document.getElementById("nota2").value = "";

    document.getElementById("nota1").focus();
}