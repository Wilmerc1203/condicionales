let nota1=parseInt(prompt("ingrese su nota :"));
let nota2=parseInt(prompt("ingrese su nota :"));
let nota3=parseInt(prompt("ingrese su nota :"));

if(nota1 >= nota2 && nota1 >= nota3){
    mayor=nota1;
    segundomayor = (nota2 >= nota1 && nota2 >= nota3) ? nota2 : nota3 ;
}else if( nota2 >= nota1 && nota2>=nota3){
    mayor= nota2 ;
    segundomayor = (nota1 >= nota2)? nota1:nota3 ;
}else{
    mayor= nota3 ;
    segundomayor = (nota1>=nota2)? nota1:nota2 ;
}
let promedio=(mayor + segundomayor)/2;
console.log("su promedio de nota es : ",promedio);