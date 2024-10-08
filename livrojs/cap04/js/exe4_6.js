function calcular(){
    const saque = Number(document.getElementById("inSaque").value);
    if (saque % 10 != 0) { // se saque não é múltiplo de 10
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
        document.getElementById("inSaque").focus();
        return false;
    }
    const n100 = Math.floor(saque/100);
    const n50 = Math.floor((saque-n100*100)/50);
    const n10 = Math.floor((saque-n100*100-n50*50)/10);
    document.querySelector("#outN100").innerText = `Notas de R$100: ${n100}`;
    document.querySelector("#outN50").innerText = `Notas de R$50: ${n50}`;
    document.querySelector("#outN10").innerText = `Notas de R$10: ${n10}`;
    return false; //impede o refresh
}