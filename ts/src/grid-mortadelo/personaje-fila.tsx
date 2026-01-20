import React from "react";
import { Personaje } from "./modelo";

interface PropsPersonaje {
  personaje: Personaje;
}

export const PersonajeFila: React.FC<PropsPersonaje> = (props) => {
  const {personaje} = props

  return (
    <>
      <img src={`http://localhost:3000/${personaje.imagen}`} />
      <span>{personaje.nombre}</span>
      <span>{personaje.id}</span>
      <span>{personaje.apodo}</span>
      <span>{personaje.especialidad}</span>
      <span>{personaje.habilidades}</span>
      <span>{personaje.amigo}</span>
    </>
  )
}