import { useState } from "react";


function Form({onAddPais}){
    const [nombre,setNombre]=useState("");
    const [capital,setCapital]=useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();


        if (nombre.trim().length < 3 || nombre.startsWith(" ")) {
            setError("Por favor chequea que la información sea correcta");
            return;
          }
      
        if (capital.length < 6) {
            setError("Por favor chequea que la información sea correcta");
            return;
        }

        if(nombre&&capital){
           onAddPais({nombre,capital});
           setNombre("");
           setCapital("");
           setError(""); 
        }
    };


    return(
        <div>
            <form onSubmit={handleSubmit} className="form-container">
                <input type="text" placeholder="Ingrese el nombre del Pais" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                <input type="text" placeholder="Ingrese el nombre de la capital" value={capital} onChange={(e)=>setCapital(e.target.value)}/>
                <button type="Submit">Ingresar Pais</button>
            </form>

            <div>
                {error && <p className="error">{error}</p>}   
            </div>
        </div>
    )
};

export default Form;
