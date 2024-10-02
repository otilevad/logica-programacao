const frm = document.querySelector("#restauranteForm");
const resp = document.querySelector("#outPagar");

frm.addEventListener("submit", (e)=>{
    //entrada de dados
    const quilo = Number(frm.inQuilo.value);
    const consumo = Number(frm.inConsumo.value);
    //processamento
    const valor = (consumo/1000)*quilo;
    //saídas
    resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`;
    e.preventDefault();
});