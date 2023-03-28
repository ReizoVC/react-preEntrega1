import React from 'react'
import './ItemListContainer.css'
import heroimg from './../../assets/images/heroimg.png'

function ItemListContainer({greeting}) {
    return(
    <div className='hero' style={{ backgroundImage:`url(${heroimg})` }}>
      <h1 className='hero-text'>{greeting}</h1>
    </div>
    );
}

export default ItemListContainer;