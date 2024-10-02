const frm = document.querySelector("#filmeForm");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e)=>{
    //entrada de dados
    const titulo = frm.inTitulo.value;
    const duracao = Number(frm.inDuracao.value);
    //processamento
    const horas = Math.floor(duracao/60);
    const minutos = duracao%60;
    //saídas
    resp1.innerText = titulo;
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;
    e.preventDefault();
});