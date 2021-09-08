'use strict'

var notas = [] ;

var cantidad = 0;

var suma = 0;

var resultado = 0;

var total = 0;




function Calcular (){
    notas.push (
        parseFloat(document.getElementById('n1').value),
        parseFloat(document.getElementById ('n2').value),
        parseFloat(document.getElementById('n3').value))


    cantidad = notas.length; 

    notas.forEach (function(nota){
        total += nota});

    resultado = (total/cantidad);

    console.log(resultado);
    console.log(total);
    console.log(cantidad);


    document.getElementById('promedio').innerHTML = resultado;

    



        console.log(notas);


}