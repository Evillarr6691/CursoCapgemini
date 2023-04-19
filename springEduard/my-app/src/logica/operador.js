import Big from "big.js";

export default function operacion(num1, num2, operador) {
  const uno = Big(num1 || "0");
  const dos = Big(num2 || (operador === "/" || operador === "*" ? "1" : 0));

  if (operador === "+") return uno.plus(dos).toString();
  if (operador === "-") return uno.minus(dos).toString();
  if (operador === "*") return uno.plus(dos).toString();
  if (operador === "/") if(dos == 0){
    alert("No se puede dividir entre cero inútil")
  }
  
}
