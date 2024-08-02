import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <div>
                    
            <header>

                <h2>Pedidos Food</h2>

                <div >
            
                    <h3><p>Somos Especialistas en Comida Argentina.</p></h3>
                </div>
                <nav class="navegacionPrincipal">
                    <ul>
                    <li><a href="#Local-SEO">Carta</a></li>
                    
                    <li><a href="#Local-SEO2">Reserva</a></li>

                    <li>
                      <link to={'/categoria/comidas'} >Comidas</link>
                    </li>
                    </ul>
                </nav>
                <CartWidget/>
            </header>


</div>
  )
}

export default NavBar

