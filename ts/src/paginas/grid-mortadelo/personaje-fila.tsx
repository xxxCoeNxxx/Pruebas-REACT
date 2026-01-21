import React from "react";
import { Personaje } from "./modelo";
import { generatePath, Link } from "react-router-dom";
import { rutas } from "@/constantes";

interface PropsPersonaje {
  personaje: Personaje;
}

export const PersonajeFila: React.FC<PropsPersonaje> = (props) => {
  const {personaje} = props

  return (
    <>
      <img src={`http://localhost:3000/${personaje.imagen}`} />
      <Link to={generatePath(rutas.DETALLE_PERSONAJE, {id: personaje.id})}>{personaje.id}</Link>
      <span>{personaje.nombre}</span>
      <span>{personaje.apodo}</span>
    </>
  )
}