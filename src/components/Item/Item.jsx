import React from 'react'
import {link} from 'react-router-dom'

const Item = ({e}) => {
  return (
    <div className='Item-card'>
        <span>0</span>
        <CiShoppingCart/>
        <h2>{e.nombre}</h2>
        <link to= {'/detalle/${e.id}'}>ver detalle</link>
    </div>
  )
}

export default Item