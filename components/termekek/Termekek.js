import Termek from "./Termek";

export default function Termekek(props){

    return(
        <>  
            {
                props.lista.map((elem, index) => {
                    return(<Termek elem = {elem} key = {index} index = {index}/>)
                })
            }
        </>
    )
}