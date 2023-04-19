import Boton from "./Boton";

export default function DisplayBotones({ clickRealizado }) {
  const hacerClick = (nombreBoton) => clickRealizado(nombreBoton);

  return (
    <div>
      <div>
        <Boton name="BorrarTodo" clickRealizado={hacerClick} />
        <Boton name="+/-" clickRealizado={hacerClick} />
        <Boton name="%" clickRealizado={hacerClick} />
        <Boton name="/" clickRealizado={hacerClick} />
      </div>
      <div>
        <Boton name="7" clickRealizado={hacerClick} />
        <Boton name="8" clickRealizado={hacerClick} />
        <Boton name="9" clickRealizado={hacerClick} />
        <Boton name="*" clickRealizado={hacerClick} />
      </div>
      <div>
        <Boton name="4" clickRealizado={hacerClick} />
        <Boton name="5" clickRealizado={hacerClick} />
        <Boton name="6" clickRealizado={hacerClick} />
        <Boton name="-" clickRealizado={hacerClick} />
      </div>
      <div>
        <Boton name="1" clickRealizado={hacerClick} />
        <Boton name="2" clickRealizado={hacerClick} />
        <Boton name="3" clickRealizado={hacerClick} />
        <Boton name="+" clickRealizado={hacerClick} />
      </div>
      <div>
        <Boton name="0" clickRealizado={hacerClick} />
        <Boton name="." clickRealizado={hacerClick} />
        <Boton name="=" clickRealizado={hacerClick} />
      </div>
      
    </div>
  );
}
