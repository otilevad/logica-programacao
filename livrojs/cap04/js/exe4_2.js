function calcular(){
    const nome = document.getElementById("inNome").value;
    const sexo = document.getElementById("inMasculino").checked;
    const altura = Number(document.getElementById("inAltura").value);
    const peso = sexo ? 22*Math.pow(altura,2) : 21*Math.pow(altura,2);
    document.querySelector("#outPeso").innerText = `${nome}: Seu peso ideal é ${peso.toFixed(2)} kg`;
    return false; //impede o refresh
}
function limpar(){
    document.querySelector("#outPeso").innerText = "";
}