import React,{useState} from 'react'
import { Card, InputForm, BotonGuardar } from './index.js'

export const Form = () => {
  const [nombre, setNombre] = useState('');
  const [pelicula, setPelicula] = useState('');
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  
  const handleClick = () => {
    event.preventDefault();

    const validarNombre = nombre.length >= 3 && !nombre.startsWith(' ') ? true : false
    const validarPelicula = pelicula.length >= 6 ? true : false

    if (!validarNombre || !validarPelicula){
        setError('Por favor chequea que la información sea correcta')
    }else{
        setError('');
        setSubmittedData({ nombre, pelicula });
    }

  }
  return (
    <section>
        <form className='form'>
            <InputForm placeholder='Nombre del personaje' value={nombre} onChange={e => setNombre(e.target.value)}/>
            <InputForm placeholder='Nombre de la Película' value={pelicula} onChange={e => setPelicula(e.target.value)}/>
            <BotonGuardar handleClick={handleClick} type="submit"/>
        </form>
        {error && <p className='error'>{error}</p>}
        {!error && submittedData && <Card datos={submittedData} />}
    </section>
  )
}
