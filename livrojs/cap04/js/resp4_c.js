function calcular(){
    const valor = Number(document.getElementById("inValor").value);
    let troco;
    if(valor>=3){
        tempo=120;
        troco=valor-3;
    }
    else if(valor>=1.75){
        tempo=60;
        troco=valor-1.75;
    }
    else if(valor>=1){
        tempo=30;
        troco=valor-1;
    }
    else{
        document.querySelector("#outResp").innerText = "Valor Insuficiente";
        document.querySelector("#outTroco").innerText = "";
        return false;
    }
    document.querySelector("#outResp").innerText = `Tempo: ${tempo} min`;
    document.querySelector("#outTroco").innerText = `Troco R$: ${troco.toFixed(2)}`;
    return false;
}