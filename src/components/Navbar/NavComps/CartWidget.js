import React from 'react'

function CartWidget({cantidad}) {
  return (
    <div>
        <span className='cantidad-carrito' id='cantidadCarrito'>{cantidad}</span>
    </div>
  );
};

export default CartWidget;