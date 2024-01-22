import { useState, useEffect } from "react";
import { Listado } from "./Listado/Listado";
import Formulario from "./Formulario/Formulario";
import Buscador from "./Buscador/Buscador";
import { Alert } from "./Alert/Alert";
import BaseColaboradores from "./BaseColaboradores";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState({ mensaje: "", tipo: "" });
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [colabFilter, setColabFilter] = useState(BaseColaboradores);

  useEffect(() => {
    if (!terminoBusqueda) {
      setColabFilter(colaboradores);
    } else {
      const filterLowerCase = terminoBusqueda.toLowerCase();
      const filtrados = colaboradores.filter((colaborador) =>
        Object.values(colaborador).some((valor) =>
          valor.toString().toLowerCase().includes(filterLowerCase)
        )
      );
      setColabFilter(filtrados);
    }
  }, [terminoBusqueda, colaboradores]);

  const agregarColaborador = (nuevoColaborador) => {
    const nuevoId = colaboradores.length + 1;
    const nuevoColaboradorConId = {
      ...nuevoColaborador,
      id: nuevoId.toString(),
    };
    const nuevosColaboradores = [...colaboradores, nuevoColaboradorConId];

    setColaboradores(nuevosColaboradores);
    setAlerta({
      mensaje: "Colaborador agregado exitosamente",
      tipo: "success",
    });
    setTerminoBusqueda("");
  };

  return (
    <div className="container my-5">
      <div className="row mb-4">
        <div className="col-12">
          <h1>Lista de colaboradores</h1>
          <Buscador setTerminoBusqueda={setTerminoBusqueda} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 col-12 mb-3">
          <Listado colaboradores={colabFilter} />
        </div>
        <div className="col-sm-4 col-12">
          <Formulario
            agregarColaborador={agregarColaborador}
            setAlerta={setAlerta}
          />
          <Alert mensaje={alerta.mensaje} tipo={alerta.tipo} />
        </div>
      </div>
    </div>
  );
}

export default App;
