import React from "react";
import { useParams } from "react-router-dom";
import { getPersonajeById } from "./personaje.api";
import { ModeloPersonaje, crearPersonajeVacio } from "./modelo-personaje";

export const PersonajeDetalle: React.FC = () => {
  const {id} = useParams<{id: string}>();

  const [personaje, setPersonaje] = React.useState<ModeloPersonaje>(crearPersonajeVacio());

  React.useEffect(() => {
    if(id) {
      try {
       getPersonajeById(id).then(setPersonaje);
      } catch (error) {
        throw new Error("Error al cargar el personaje");
      }
    }
  }, []);

  return (
    <div className="contenedor-detalle">
      <h2>Detalles de personajes</h2>
      <img src={`http://localhost:3000/${personaje.imagen}`} /> {/* No lo coge de getPersonajeById?? */}
      <p>{personaje.nombre}</p>
      <p>{personaje.apodo}</p>
      <p>{personaje.especialidad}</p>
      <p>{personaje.habilidades}</p>
      <p>{personaje.amigo}</p>
    </div>
  );
};