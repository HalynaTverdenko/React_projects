import React from 'react'
import Paslauga from './Paslauga'
import './Paslaugos.css'

const Paslaugos = () => {
  return (
    <div className='paslaugos-wrapper'>
        <h1>Paslaugos</h1>
        <div className='paslaugu-list'>
        <Paslauga />
      <Paslauga />
      <Paslauga />
        </div>
    </div>
  )
}

export default Paslaugos
