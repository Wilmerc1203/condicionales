let numero1 = parseFloat(prompt("Ingrese el primer numero"));
let numero2 = parseFloat(prompt("Ingrese el segundo numero"));
let numero3 = parseFloat(prompt("Ingrese el tercero numero"));

if(numero1 === numero2 && numero2 === numero3){
    console.log("los tres numeros son iguales ");
}
else{
    if(numero1 > numero2 && numero1>numero3){
        console.log("el numero mayor es" ,numero1);
    }
    else if(numero2>numero1 && numero2>numero3){
        console.log("el numero mayor es :",numero2);
    }else{
        console.log("el numero mayor es :",numero3);
    }

    if(numero1 < numero2 && numero1 < numero3){
        console.log("el numero menor  es" ,numero1);
    }
    else if(numero2 < numero1 && numero2 < numero3){
        console.log("el numero menor es :",numero2);
    }else{
        console.log("el numero menor es :",numero3);
    } 
    if( numero1 !== numero2 || numero1 !== numero3 || numero2 !== numero3){
        console.log("los tres numeros son diferentes ");
    }
}
