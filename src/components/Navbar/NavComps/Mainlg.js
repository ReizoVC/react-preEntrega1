import React from 'react'
import logoimg from './../../../assets/images/nav-logo.webp'


export const Mainlg = () => {
  return (
    <div className='logocontainer'>
        <a href='https://github.com/ReizoVC/react-preEntrega1'><img src={logoimg} alt="carrito" className='carrito-nav'/></a>
        <p className='logoname'>SkullStore</p>
    </div>
  )
}