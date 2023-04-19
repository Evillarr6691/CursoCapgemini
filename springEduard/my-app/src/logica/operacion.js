import Big from "big.js";
import operar from "./operar";
import numero from "./numero";

export default function operaciones(estado, nombreBoton) {
  if (nombreBoton === "BorrarTodo") {
    return {
      total: null,
      siguiente: null,
      operador: null,
    };
  }

  if (numero(nombreBoton)) {
    if (nombreBoton === "0" && estado.siguiente === "0") return {};
    if (estado.operador) {
      if (estado.siguiente)
        return { siguiente: estado.siguiente + nombreBoton };

      return { siguiente: nombreBoton };
    }

    if (estado.siguiente) {
      const siguiente =
        estado.siguiente === "0" ? nombreBoton : estado.siguiente + nombreBoton;
      return { siguiente, total: null };
    }

    return { siguiente: nombreBoton, total: null };
  }

  if (nombreBoton === "/") {
    if (estado.operador && estado.siguiente) {
      const result = operar(estado.total, estado.siguiente, estado.operador);
      return {
        total: Big(result).div(Big("100").toString()),
        siguiente: null,
        operador: null,
      };
    }

    if (estado.siguiente) {
      return { siguiente: Big(estado.siguiente).div(Big("100").toString()) };
    }

    return {};
  }

  if (nombreBoton === ".") {
    if (estado.siguiente.include(".")) return {};

    return { siguiente: estado.siguiente + "." };
  }

  return { siguiente: "0" };

  if (nombreBoton === "=") {
    if (estado.siguiente && estado.operador) {
      return {
        total: operar(estado.total, estado.siguiente, estado.operador),
        siguiente: null,
        operador: null,
      };
      return {};
    }
  }
}
