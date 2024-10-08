function calcular(){
    const ladoA = Number(document.getElementById("inLadoA").value);
    const ladoB = Number(document.getElementById("inLadoB").value);
    const ladoC = Number(document.getElementById("inLadoC").value);
    let tipo;
    if(ladoA+ladoB<ladoC || ladoA+ladoC<ladoB || ladoB+ladoC<ladoA){
        document.querySelector("#outResp").innerText = "Lados não podem formar um triângulo";
        document.querySelector("#outTipo").innerText = "";
        return false;
    }
    else{
        if(ladoA==ladoB && ladoB==ladoC){
            tipo="Equilátero";
        }
        else if(ladoA!=ladoB && ladoB!=ladoC && ladoA!=ladoC){
            tipo="Escaleno";
        }
        else{
            tipo="Isósceles";
        }
        document.querySelector("#outResp").innerText = "Lados podem formar um triângulo";
        document.querySelector("#outTipo").innerText = `Tipo: ${tipo}`;
    }
    return false;
}