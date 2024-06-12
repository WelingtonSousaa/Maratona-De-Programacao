let btnProbabilidade = document.getElementById("btn-probabilidade");
let telaPropabilidade = document.getElementById("telaProbabilidade");
let body = document.querySelector("body");


//Método para gerar a probabilidade de cada time
const GerarTelaPropabilidade = (times) =>{
    let conteudo = document.getElementById("conteudo");
    let texto = document.createElement("h3");
    texto.id = "texto";
    texto.innerHTML = "Quem ganha a Maratona?"

    let timesEmPartidas = [];
    let valorVitorias = 0;
    let tela = document.createElement("div");
    let linhasTimes =document.createElement("ul");
    let buttonSair = document.createElement("button");
    let controle = 0;
    
    buttonSair.className = ("bi bi-x-lg");
    buttonSair.id = "buttonSair";
    tela.id = "Probabilidades";
    linhasTimes.id = "linhasTimes"

    times.map((time)=>{
        if(time.perdeu === false){
            console.log("esse time não perdeu ainda: "+time.nome)
            timesEmPartidas[controle] =  time;
            valorVitorias += time.pontuacaoTotal;
            controle++;
        }
    })
    valorVitorias+= timesEmPartidas.length;

   
   
    timesEmPartidas.map((time)=>{
        const porcentagem = (parseInt(time.pontuacaoTotal+1)/valorVitorias)*100;
        li = document.createElement("li");
        li.class = "timesEmPartidas"
        li.innerHTML = `<p>${time.nome}</p><p>${porcentagem.toFixed(2)}%</p>`
        linhasTimes.appendChild(li);
    })

    buttonSair.addEventListener("click", ()=>{
        telaPropabilidade.removeChild(tela);
        conteudo.classList.remove("borramento")
        
    })
    

    tela.appendChild(buttonSair)
    tela.appendChild(texto);
    tela.appendChild(linhasTimes)
    telaPropabilidade.appendChild(tela);
    conteudo.classList.add("borramento");

}

btnProbabilidade.addEventListener("click", ()=>{
    GerarTelaPropabilidade(times);

})


body.addEventListener("click", (event) => {
    if (!telaPropabilidade.contains(event.target) && event.target !== btnProbabilidade) { 
        if (telaPropabilidade.contains(document.getElementById("Probabilidades"))) {
            telaPropabilidade.removeChild(document.getElementById("Probabilidades"));
            conteudo.classList.remove("borramento")
        }
    }
});







