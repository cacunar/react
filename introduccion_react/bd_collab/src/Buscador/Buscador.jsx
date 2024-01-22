import React, { useState} from "react";

const Buscador = ( { colaboradores, setTerminoBusqueda, setColaboradoresFilter}) => {

    const handleSearch = (e) => {
        const busqueda = e.target.value;
        setTerminoBusqueda (busqueda)

        if (!busqueda) {
            setColaboradoresFilter([]);
        }else {
            filtrarColab(busqueda);
        }
    } 

    const filtrarColab = (busqueda) => {
        const filterLowerCase = busqueda.toLowerCase();
        const filtrados = colaboradores.filter((colaborador) => {
            return Object.values(colaborador).some((valor) =>
            valor.toString().toLowerCase().includes(filterLowerCase))
        })
        setColaboradoresFilter(filtrados);
    };
    
    
    return (
        <input
          type="text"
          className="search-input"
          placeholder="Buscar colaboradores..."
          onChange={handleSearch}
        />
      );
}

export default Buscador