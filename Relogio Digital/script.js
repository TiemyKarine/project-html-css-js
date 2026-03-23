
    var horas= document.getElementById('horas');
    var minutos= document.getElementById('minutos');
    var segundos= document.getElementById('segundos');

    const relogio= setInterval(function time() {
        var nowDate= new Date();
        var hr= nowDate.getHours();
        var min= nowDate.getMinutes();
        var seg= nowDate.getSeconds();

        if(hr <= 10) hr= '0' + hr;
        if(min <= 10) min= '0' + min;
        if(seg <= 10) seg= '0' + seg;

        horas.textContent= hr;
        minutos.textContent= min;
        segundos.textContent= seg;
    }, 1000);

    