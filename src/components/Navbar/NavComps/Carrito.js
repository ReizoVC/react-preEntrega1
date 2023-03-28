import React from 'react'
import carritoimg from './../../../assets/images/carrito.png'
import CartWidget from './CartWidget'


function Carrito() {

  let carlenght = 0;

  return (
    <div className='carritocont'>
        <a href="https://github.com/ReizoVC/react-preEntrega1">
          <img src={carritoimg} alt="carrito" className="carrito-nav" />
        </a>
          <CartWidget
          cantidad={carlenght}
          />
    </div>
  )
}

export default Carrito;