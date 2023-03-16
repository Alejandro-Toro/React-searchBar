import { useState } from "react";
import { BaseColaboradores } from "./components/BaseColaboradores";



function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [nuevoColaborador, setNuevoColaborador] = useState({
    id: "",
    nombre: "",
    correo: "",
  });

  const [busqueda, setNuevaBusqueda] = useState("");

  const agregarColaborador = (e) => {
    e.preventDefault();

    if (nuevoColaborador.nombre === "" || nuevoColaborador.correo === ""){
          return alert("Faltan campos por llenar")
    }

    setColaboradores([...colaboradores, nuevoColaborador]);

    setNuevoColaborador({
      id: "",
      nombre: "",
      correo: "",
    });
  };

  const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
    if (colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase())) {
      return true
      
    }
    return false

  });

  return (
    <>
    <nav>
      <input 
      className="form-control me-2 my-3"
      placeholder="Buscar un colaborador"
      onChange={(e) => setNuevaBusqueda(e.target.value)}
      value={busqueda}/>
    </nav>

    <form action="" onSubmit={agregarColaborador} className="Formulario"> 
      <h3>Agrega un colaborador</h3>
      <hr/>
      <label>Nombre colaborador</label>
      
      <input 
      className="form-control me-2 my-3"
      type="text"
      onChange={(e) => setNuevoColaborador({
        id: Date.now(),
        nombre: e.target.value,
        correo: nuevoColaborador.correo,
      })}
      value={nuevoColaborador.nombre}
      />

      <label>Correo del colaborador</label>

      <input 
      className="form-control me-2 my-3"
      type="email"
      onChange={(e) => setNuevoColaborador({
        id: Date.now(),
        nombre: nuevoColaborador.nombre,
        correo: e.target.value,
      })}
      value={nuevoColaborador.correo}
      />

      <button
      className="mt-0 btn btn-primary"
      type="submit"
      >Agregar colaborador</button>

    </form>
    <hr/>
    <div className="Lista">
      
      <h3>Lista Colaboradores</h3>

        <ul>
          {colaboradoresFiltrados.map( ({id, nombre, correo}) => <li key={id}>{nombre} | {correo}</li>)}
        </ul>
    </div>
    </>
  );
}

export default App;
