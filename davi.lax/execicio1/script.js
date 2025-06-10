let num1;
let num2;
let resultado;

num1 = Number(window.prompt("digite aqui o primeiro numero"));
num2 = Number(window.prompt("digite aqui o segundo numero"));

resultado = num1 + num2;

parQuImpar = resultado % 2; 

if(parQuImpar == 0) {

}
if(resultado > 10) {
    alert("o numero " + resultado + " é par");
} else {
    alert("o numero " + resultado + " é inpar");
}

alert(resultado);


 