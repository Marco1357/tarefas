import { useState } from "react";

export default function Calculadora() {
    const [primeiro, setPrimeiro ] = useState('')
    const [segundo, setSegundo ] = useState('')
    const [resultado, setResultado ] = useState(null)

    //console.log(primeiro,segundo)

    const somar = () =>{
        //realizar a soma do primeiro + segundo e mostrar rsultado
    }
    return (
         <div className="container mt-5" style={{ maxWidth: "500px" }}>
            <h1 className="text-center mb-4">Calculadora</h1>

            <input
                type="number"
                className="me-2" 
                value={primeiro}
                onChange={(e) => setPrimeiro(e.target.value)}
            />           

            <input
                type="number"      
                className="me-2"      
                value={segundo}
                onChange={(e) => setSegundo(e.target.value)}

            />
            <b onClick={somar}utton>Somar</button>
            <div>Resultado</div>
         </div>
    )
}