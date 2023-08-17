import { useState } from "react";
import Form from "./Form";
import Card from "./Card";
import './App.css';


function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [paises, setPaises]=useState([]);

  const adicionarPais = (pais) =>{
    setPaises([...paises, pais])
  }

  return (
    <div className="App">
      <h1>Inscripcion de Paises</h1>
      <Form onAddPais={adicionarPais}/>
      <Card paises ={paises}/>
    </div>
  );
}

export default App;
