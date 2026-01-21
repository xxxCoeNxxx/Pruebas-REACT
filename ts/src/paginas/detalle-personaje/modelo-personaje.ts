export interface ModeloPersonaje {
  id: string,
  nombre: string,
  apodo: string,
  especialidad: string,
  habilidades: string[],
  amigo: string,
  imagen: string,
}

export const crearPersonajeVacio = (): ModeloPersonaje => ({
  id: "",
  nombre: "",
  apodo: "",
  especialidad: "",
  habilidades: [],
  amigo: "",
  imagen: "",
});