function calcular(){
    const permitida = Number(document.getElementById("inPer").value);
    const condutor = Number(document.getElementById("inCon").value);
    const div = (condutor/permitida);
    let txt = "Sem Multa";
    if(div>1.2){
        txt = "Multa Grave";
    }else if(div>1 && div<=1.20){
        txt = "Multa Leve";
    }
    document.querySelector("#outResp").innerText = txt;
    return false; //impede o refresh
}