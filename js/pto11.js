let forma=prompt("ingrese la forma");
let longitud=parseFloat(prompt("ingrese la longitud"));
let diametro=parseFloat(prompt("ingrese el diametro"));
let varilla ;
let masa=(longitud*diametro)/3.5 ;

if(forma=="varilla" && longitud>=7.5 && longitud<=9 && diametro>0.5 && diametro<1.3){
console.log("si cumple",masa,"cm");
}else{
    console.log("no cumple") ;
}
