const frm = document.querySelector("#mercadoForm");
const resp1 = document.querySelector("#outPromo");
const resp2 = document.querySelector("#outTerceiro");

frm.addEventListener("submit", (e)=>{
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);
    const valorTerceiro = preco*.5;
    const valorTotal = preco*2.5;
    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${valorTotal.toFixed(2)}`;
    resp2.innerText = `O 3° produto custa apenas R$: ${valorTerceiro.toFixed(2)}`;
    e.preventDefault();
});