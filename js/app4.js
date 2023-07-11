


var credito =[ {nombre: "plan 001" , capital: 150000, plazo: 30 , tasa: 15},
{nombre: "plan 002" , capital: 300000, plazo: 180 , tasa: 10},
{nombre: "plan 003" , capital: 485000, plazo: 60 , tasa: 23}]

for (let index = 0; index < credito.length; index++) {
    const plan= credito[index]["nombre"];
    const capital = credito[index]["capital"];
    const plazo = credito[index]["plazo"];
    const tasa = credito[index]["tasa"];
    let interes= (capital*plazo*tasa)/100;
   console.log("interes generado"+" "+ interes);
    
}