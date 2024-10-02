const frm = document.querySelector("#alunoForm");
const resp1 = document.querySelector("#outMedia");
const resp2 = document.querySelector("#outSituacao");

frm.addEventListener("submit", (e)=>{
    const aluno = frm.inAluno.value;
    const media = (Number(frm.inNota1.value)+Number(frm.inNota2.value))/2;
    const situacao = media>=7 ? `Parabéns ${aluno}! Você foi Aprovado(a)` : `Ops ${aluno}... Você foi reprovado(a)`;
    resp2.style.color = media>=7 ? "blue" : "red";
    resp1.innerText = `Média das Notas ${media.toFixed(2)}`;
    resp2.innerText = situacao;
    e.preventDefault();
});