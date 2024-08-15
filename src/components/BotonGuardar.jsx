import React from 'react'

export const BotonGuardar = ({handleClick,type}) => {
  return (
    <button className='boton_guardar' onClick={handleClick} type={type}>Guardar</button>
  )
}
