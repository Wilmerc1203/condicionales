let sueldo=parseInt(prompt("ingrese su sueldo "))
let aumento = sueldo * 0.15;
let total = aumento + sueldo;
if(sueldo<300000){
    
    console.log("su sueldo es de :",total);
} else{
    console.log ("su sueldo es :",sueldo);
}