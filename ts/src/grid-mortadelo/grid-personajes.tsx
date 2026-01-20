import React from "react";
import { Personaje } from "./modelo";
import { PersonajeFila } from "./personaje-fila";
import { obtenerPersonajes } from "./personaje.api";

  export const GridPersonajes = () => {
    const [personajes, setPersonajes] = React.useState<Personaje[]>([]);

    React.useEffect(() => {
      obtenerPersonajes().then((personajes) => setPersonajes(personajes))
    }, []);

    return (
      <div className="personajes-listado-container">
        <span className="header">Imagen</span>
        <span className="header">Nombre</span>
        <span className="header">Id</span>
        <span className="header">Apodo</span>
        <span className="header">Especialidad</span>
        <span className="header">Habilidades</span>
        <span className="header">Amigo</span>

        {personajes.map((personaje) => (
          <PersonajeFila key={personaje.id} personaje={personaje}/>
        ))}
      </div>
    );
  };