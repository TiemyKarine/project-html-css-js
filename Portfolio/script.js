function enviarMensagem(event){
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;   
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5511945855834'

    const texto = `Hey! Me chamo ${nome} e gostaria de saber mais sobre você...${mensagem}`
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    console.log(url);

    window.open (url,'_blank');
}
