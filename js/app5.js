var flujomes = [{ mes: "enero", ingreso: 1500, egreso: 1500 },
{ mes: "febrero", ingreso: 2500, egreso: 2500 },
{ mes: "marzo", ingreso: 84683, egreso: 1155 },
{ mes: "abril", ingreso: 135653, egreso: 1535 },
{ mes: "mayo", ingreso: 1535, egreso: 5434 },
{ mes: "junio", ingreso: 4343343, egreso: 5334434 },
{ mes: "julio", ingreso: 435453, egreso: 4534 },
{ mes: "agosto", ingreso: 78351, egreso: 7916 },
{ mes: "septiembre", ingreso: 1878, egreso: 95634 },
{ mes: "octubre", ingreso: 48483, egreso: 1500 },
{ mes: "noviembre", ingreso: 5678765, egreso: 1500 },
{ mes: "diciembre", ingreso: 1500, egreso: 1500 }]

function flujoCaja(flujomes) {
    for (let index = 0; index < flujomes.length; index++) {
        const element = flujomes[index]["ingreso"];
        const element1 = flujomes[index]["egreso"];
        const element2 = flujomes[index]["mes"];
        if (element > element1) {
            console.log("mes con ganancias" + " " + element2);
        } else {
            console.log("mes con perdidas" + " " + element2);
        }
        if (element == element1) {
            console.log("ingresos y egresos iguales" + " " + element2);
        }
    }


}

var credito =[ {nombre: "plan 001" , capital: 150000, plazo: 30 , tasa: 15},
{nombre: "plan 002" , capital: 300000, plazo: 180 , tasa: 10},
{nombre: "plan 003" , capital: 485000, plazo: 60 , tasa: 23}]

function interes(credito) {
    for (let index = 0; index < credito.length; index++) {
        const plan= credito[index]["nombre"];
        const capital = credito[index]["capital"];
        const plazo = credito[index]["plazo"];
        const tasa = credito[index]["tasa"];
        let interes= (capital*plazo*tasa)/100;
        credito.push(interes);
       console.log("interes generado"+" "+ plan + interes);
       
        
    }
}
