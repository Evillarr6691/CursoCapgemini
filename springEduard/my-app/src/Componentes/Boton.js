export default function Boton({clickRealizado, name}){
    
    const hacerClick = () => clickRealizado(name)
    
    return(
        <div>
            <button onClick={hacerClick}>{name}</button>
        </div>
    )
}