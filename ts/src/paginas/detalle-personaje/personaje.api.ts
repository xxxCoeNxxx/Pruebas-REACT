import { ModeloPersonaje } from "./modelo-personaje";

export const getPersonajeById = (id: string): Promise<ModeloPersonaje> => {
  return fetch(`http://localhost:3000/personajes/${id}`).then((response) =>
    response.json()
  );
};