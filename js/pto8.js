let num1=parseInt(prompt("ingrese el primer numero"));
let num2=parseInt(prompt("ingrese el primer numero"));
let num3=parseInt(prompt("ingrese el primer numero"));

if((num1 > num2 && num1 < num3) || (num1 > num3 && num1 < num2)){
    console.log("el numero de la mitad es",num1);
}
else if((num2>num1 && num2<num3) || (num2 > num3 && num2 < num1)){
    console.log("el numero de la mitad es",num2);
}
else {
    console.log("el numero de la mitad es ",num3);
}