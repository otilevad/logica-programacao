const frm = document.querySelector("#carroForm");
const resp1 = document.querySelector("#outTitle");
const resp2 = document.querySelector("#outEntrada");
const resp3 = document.querySelector("#outParcelas");

frm.addEventListener("submit", (e)=>{
    //entrada de dados
    const titulo = frm.inVeiculo.value;
    const preco = Number(frm.inPreco.value);
    //processamento
    const entrada = preco*.5;
    const parcelas = (preco-entrada)/12;
    //saídas
    resp1.innerText = `Promoção: ${titulo}`;
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;
    resp3.innerText = `+12x de R$ ${parcelas.toFixed(2)}`;
    e.preventDefault();
});