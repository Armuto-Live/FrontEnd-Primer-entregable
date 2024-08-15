import React from 'react'

export const InputForm = ({placeholder, value, onChange}) => {
  return (
    <input type="text" placeholder={placeholder} value={value} onChange={onChange}/>
  )
}
