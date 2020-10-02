var Calculadora = (function() {

//Usando listeners para enlazar funciones relacionadas con las teclas

document.getElementById('on').addEventListener("click", Limpiar);

document.getElementById('sign').addEventListener("click", Invertir_Signo);

document.getElementById('igual').addEventListener("click", Igual);

document.getElementById('mas').addEventListener("click", function(){
  Operacion('+');
});
document.getElementById('menos').addEventListener("click", function(){
  Operacion('-');
});
document.getElementById('por').addEventListener("click", function(){
  Operacion('*');
});
document.getElementById('dividido').addEventListener("click", function(){
  Operacion('/');
});
document.getElementById('punto').addEventListener("click", function(){
  MostrarNum('.');
});
document.getElementById('0').addEventListener("click", function(){
  MostrarNum('0');
});
document.getElementById('1').addEventListener("click", function(){
  MostrarNum('1');
});
document.getElementById('2').addEventListener("click", function(){
  MostrarNum('2');
});
document.getElementById('3').addEventListener("click", function(){
  MostrarNum('3');
});
document.getElementById('4').addEventListener("click", function(){
  MostrarNum('4');
});
document.getElementById('5').addEventListener("click", function(){
  MostrarNum('5');
});
document.getElementById('6').addEventListener("click", function(){
  MostrarNum('6');
});
document.getElementById('7').addEventListener("click", function(){
  MostrarNum('7');
});
document.getElementById('8').addEventListener("click", function(){
  MostrarNum('8');
});
document.getElementById('9').addEventListener("click", function(){
  MostrarNum('9');
});
//------------------------------------------------------------------------------
var xnumero = 0;
var primer_numero = true;
var coma = false;
var numero_espera = 0;
var operacion = "no";
var igualcons = false;
var display = document.getElementById('display');
//------------------------------------------------------------------------------
function MostrarNum(num) {
         if (xnumero=="0" || primer_numero==true) {
            display.innerHTML=num;
            xnumero = num;
            if (num==".") {
               display.innerHTML="0.";
               xnumero = num;
               coma = true;
               }
           }
           else {
               if (num=="." && coma==false) {
                   display.innerHTML+=num;
                   xnumero+=num;
                   coma = true;
               }else if (num=="." && coma==true) {

               }else if (display.innerHTML.length >= 8) {
                 xnumero+=num;
               }else{
                 display.innerHTML+=num;
                 xnumero+=num;
               }
            }
            primer_numero=false;
         }
//------------------------------------------------------------------------------
function Operacion(operando) {
  Igual();
  numero_espera = xnumero;
  operacion = operando;
  primer_numero = true;
  igualcons = false;
  display.innerHTML=0;
}
//------------------------------------------------------------------------------
function Igual() {
         if (operacion=="no") {
            display.innerHTML=xnumero;
            if (display.innerHTML.length > 7) {
              display.innerHTML= String(Number(display.innerHTML).toPrecision(6));
            }
          }
         else {
            cadena = numero_espera + operacion + xnumero;
            solucion = eval(cadena);
            display.innerHTML=solucion;
            if (display.innerHTML.length > 7) {
              display.innerHTML= String(Number(display.innerHTML).toPrecision(6));
            }
            xnumero = solucion;
            operacion = "no";
            primer_numero = true;
            }
        }
//------------------------------------------------------------------------------
function Invertir_Signo() {
  if(xnumero.length > 8)  {
    nume_inv = Number(xnumero);
    nume_inv = - nume_inv.toPrecision(6);
    xnumero = nume_inv;
    display.innerHTML = xnumero;
  }else{
  nume_inv = Number(xnumero);
  nume_inv = - nume_inv;
  xnumero = nume_inv;
  display.innerHTML = xnumero;
  }
}
//------------------------------------------------------------------------------
function Limpiar() {
  display.innerHTML=0;
  xnumero = 0;
  coma=false;
  numero_espera = 0;
  operacion = "no";
  igualcons = false;
}

//------------------------------------------------------------------------------



}());

//Efecto de los botones
function On_MouseDown(elemento) {
  elemento.style = "transform: scale(0.95,0.95);";
}
function On_MouseUp(elemento) {
  elemento.style = "transform: scale(1.0,1.0)"
}
