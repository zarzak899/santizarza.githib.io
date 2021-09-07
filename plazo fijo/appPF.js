"use strict"



var monto = 0,
    periodo = 0,
    total = 0,
    tasa = 0,
    intereses = 0,
    t = 0;



function CALCULAR(monto, periodo, tasa) {
    monto = parseFloat(document.getElementById('monto').value);
    periodo = parseFloat(document.getElementById('n').value);
    tasa = parseFloat(document.getElementById('tasa').value);





    t = (tasa / 100);
    var tFinal = Math.pow((1 + t), periodo);
    total = (monto * tFinal);

    intereses = total - monto;



    document.getElementById('montoP').innerHTML = monto;
    document.getElementById('tasaP').innerHTML = (tasa / 100);
    document.getElementById('nP').innerHTML = periodo;
    document.getElementById('interesesP').innerHTML = intereses;
    document.getElementById('totalP').innerHTML = total;


}
