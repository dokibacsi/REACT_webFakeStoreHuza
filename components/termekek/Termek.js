import { useContext } from "react";
import { KosarContext } from "../../context/KosarContext";

export default function Termek(props) {
    
    const{athelyez} = useContext(KosarContext)

    function atEmel(){
        console.log(props.elem)
        const { szin, ...szuksegesAdatok } = props.elem;
        console.log(szin)
        console.log(szuksegesAdatok)
        athelyez(szuksegesAdatok);
    }
    
    return (
        <div className="termek">
                <p>Neve: {props.elem.kategoria}</p>
                <p>Szín: {props.elem.szin}</p>
                <p>Ár: {props.elem.ar}</p>
            
            <button onClick = {atEmel}>Kosárba</button>
        </div>
    )
}