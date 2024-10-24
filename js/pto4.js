let categoria = parseInt(prompt("Ingrese categoría (1-5):"));
let a = 1000000;
let b = 2000000;
let c = 3000000;
let d = 5000000;
let e = 8000000;

if (categoria === 1) {
    console.log("Su salario es de: ", a);
} else if (categoria === 2) {
    console.log("Su salario es de: ", b);
} else if (categoria === 3) {
    console.log("Su salario es de: ", c);
} else if (categoria === 4) {
    console.log("Su salario es de: ", d);
} else if (categoria === 5) {
    console.log("Su salario es de: ", e);
} else {
    console.log("Categoría no válida");
}