const frm = document.querySelector("#lanhouseForm");
const resp = document.querySelector("#outValor");

frm.addEventListener("submit", (e)=>{
    //entrada de dados
    const preco = frm.inPreco.value;
    const tempo = frm.inTempo.value;
    //processamento
    const valor = (preco*Math.ceil(tempo/15)).toFixed(2);
    //saídas
    resp.innerText = `Valor a Pagar R$: ${valor}`;
    e.preventDefault();
});