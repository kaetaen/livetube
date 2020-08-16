import React from 'react'
import loader from '../../assets/loader.gif'
import './styles.css'

function Modal () {
  return (
    <div className='modal'>
      <img src={loader} alt="carregando..." />
    </div>
  )
}

export default Modal
