const frm = document.querySelector("#formLista");

frm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const id=frm.inId.value;
    if(id != ""){
        atualizar(id);
    }else{
        incluir();
    }
});

let lista = [];
const tbody=document.querySelector("tbody");
function incluir(){
    lista.push(frm.inItem.value); //adiciona
    atualizarLista();
    //alert("Item incluído!");
}

function atualizarLista(){
    tbody.innerHTML="";
    for(let i in lista){
        tbody.innerHTML+=`<tr><td onclick="editar(${i})">${lista[i]}</td></tr>`;
    }
    frm.reset();
}

function editar(i){
    frm.inItem.value=lista[i];
    frm.inId.value=i;
}

function apagar(){
    if(frm.inId.value != ""){
        lista.splice(frm.inId.value,1);
        atualizarLista();
    }
}

function atualizar(i){
    lista[i]=frm.inItem.value;
    atualizarLista();
}