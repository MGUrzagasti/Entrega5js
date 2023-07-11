
var flujomes =[ {mes: "enero" , ingreso: 1500, egreso: 1500},
{mes: "febrero" , ingreso: 2500, egreso: 2500},
{mes: "marzo" , ingreso: 84683, egreso: 1155},
{mes: "abril" , ingreso: 135653, egreso: 1535},
{mes: "mayo" , ingreso: 1535, egreso: 5434},
{mes: "junio" , ingreso: 4343343, egreso: 5334434},
{mes: "julio" , ingreso: 435453, egreso: 4534},
{mes: "agosto" , ingreso: 78351, egreso: 7916},
{mes: "septiembre" , ingreso: 1878, egreso: 95634},
{mes: "octubre" , ingreso: 48483, egreso: 1500},
{mes: "noviembre" , ingreso: 5678765, egreso: 1500},
{mes: "diciembre" , ingreso: 1500, egreso: 1500}] 

for (let index = 0; index < flujomes.length; index++) {
    const element = flujomes[index]["ingreso"] ;
    const element1= flujomes[index]["egreso"] ;
    const element2= flujomes[index]["mes"];
   if (element > element1) {
    console.log("mes con ganancias" +" "+ element2);
   } else {
    console.log("mes con perdidas" +" "+ element2);
   }
    if (element==element1) {
        console.log("ingresos y egresos iguales" +" " +element2);
    }
}

