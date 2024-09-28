const frm = document.querySelector("#restauranteForm");
const resp = document.querySelector("#outPagar");

frm.addEventListener("submit", (e)=>{
    //entrada de dados
    const quilo = frm.inQuilo.value;
    const consumo = frm.inConsumo.value;
    //processamento
    const valor = ((consumo/1000)*quilo).toFixed(2);
    //saídas
    resp.innerText = `Valor a pagar R$: ${valor}`;
    e.preventDefault();
});