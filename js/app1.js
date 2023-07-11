
let bo = document.getElementById('calculo1');
let re = document.getElementById('respuesta4');
bo.addEventListener('click',calcular1);

function calcular1() {
    let edadpersona= document.getElementById('edad').value;
    let ep = edadpersona;

    if (ep >= 18) {
      re.innerHTML= 'mayor edad' + (ep);
    } else {
        re.innerHTML= 'menor edad' + (ep);
    }
}