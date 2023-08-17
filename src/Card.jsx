//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario


function Card({paises}) {
  return (
    <div className="listado">
      <h2>Listado de Paises</h2>
      {paises.map((pais,index)=>(
        <div key= {index} className="card">
          <h3>
            Nombre del Pais: {pais.nombre}
          </h3>
          <h4>
            Capital: {pais.capital}
          </h4>
        </div>
      ))}
    </div>
  );
}

export default Card;
