let boton = document.getElementById('calculo');
let respuesta1 = document.getElementById('respuesta1');
let respuesta2 = document.getElementById('respuesta2');
let respuesta3 = document.getElementById('respuesta3');

boton.addEventListener('click',calcular);

function calcular() {
    let n1 = parseFloat( document.getElementById('total').value);
    let res= (n1*50) / 100;
    let res1= (n1*30) / 100;
    let res2 = (n1*20) / 100;

    respuesta1.innerHTML= 'el 50 % es $' + (res);
    respuesta2.innerHTML= 'el 30 % es $' + (res1);
    respuesta3.innerHTML= 'el 20 % es $' + (res2);
}
//segunda

