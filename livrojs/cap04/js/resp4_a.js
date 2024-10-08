function calcular(){
    const num = Number(document.getElementById("inNum").value);
    document.querySelector("#outResp").innerText = (num%2==0) ? `${num} é par` : `${num} é ímpar`;
    return false; //impede o refresh
}