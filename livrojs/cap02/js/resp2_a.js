const frm = document.querySelector("#farmaciaForm");
const resp1 = document.querySelector("#outProduto");
const resp2 = document.querySelector("#outPromo");

frm.addEventListener("submit", (e)=>{
    //entrada de dados
    const med = Number(frm.inMed.value);
    const preco = Number(frm.inPreco.value); //testando compatibilidade com vírgula
    //processamento
    const valor = Math.floor(preco)*2;
    //saídas
    resp1.innerText = `Promoção de ${med}`;
    resp2.innerText = `Leve 2 por apenas R$: ${valor}`;
    e.preventDefault();
});