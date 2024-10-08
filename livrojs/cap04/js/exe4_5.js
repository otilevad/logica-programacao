function calcular(){
    const num = Number(document.getElementById("inNum").value);
    const raiz = Math.sqrt(num);
    document.querySelector("#outRaiz").innerText = (raiz%1==0 ) ? `Raiz: ${raiz}` : `Não há raiz exata para ${num}`;
    return false; //impede o refresh
}