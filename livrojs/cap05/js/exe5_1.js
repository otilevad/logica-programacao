function calcular(){
    const num = Number(document.getElementById("inNum").value);
    let resp = "";
    for(let i=1; i<=10; i++){
        resp=`${resp}${num} x ${i} = ${num*i}\n`;
    }
    document.querySelector("#outResp").innerText = resp;
    return false; //impede o refresh
}