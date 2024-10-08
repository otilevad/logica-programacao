function calcular(){
    const hora = Number(document.getElementById("inHora").value);
    document.querySelector("#outHora").innerText = `Hora na França: ${((hora+5)%24).toFixed(2)}`;
    return false; //impede o refresh
}