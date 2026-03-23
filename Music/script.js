const botaoPlays = document.getElementById ("plays");

const audio = document.getElementById ("audioplay");

let taTocando = false;

function tocarFaixa(){
    console.log ("Cliquei");
    audioplay();
    taTocando = true;
    console.log("Dei click");

    botaoPlays.classEventListener.add("tocando");
};

function pausarFaixa(){
    console.log("Clicou");
    audio.onpause();
    taTocando = false;
    console.log("Dei, pause");

    botaoPlays.classEventListener.remove("tocando");
}

function tocarOnPausar(){
    if (taTocando === true) {
        pausarFaixar()
    } else {
        tocarFaixa()
    }
}


botaoPlays.addEventListener("click", tocarOnPausar);