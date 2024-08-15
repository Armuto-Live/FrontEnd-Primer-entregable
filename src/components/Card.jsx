import React from 'react'

export const Card = ({datos}) => {
  return (
    <div className='card'>
      <h2 className='card_resultado'>Resultado</h2>
      <p><strong>Personaje Favorito:</strong> {datos.nombre}</p>
      <p><strong>Pelicula Favorita:</strong> {datos.pelicula}</p>
    </div>
  )
}
