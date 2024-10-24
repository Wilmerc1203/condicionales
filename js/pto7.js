let nombre = prompt("ingrese su nombre");
let edad =parseInt(prompt("ingrese su edad  ")) ;
let sexo  = prompt("ingrese su sexo (f o m")
let estadocivil = prompt("ingrese su estado civil (s ) ");


if(estadocivil == ("c") && sexo == ("m") && edad >= 40 ){
    console.log("su nombre es ",nombre);
}
if(estadocivil == ("s") && sexo == ("f") && edad <= 40 ){
    console.log("su nombre es ",nombre);
}

