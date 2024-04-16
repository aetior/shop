import React from 'react'
import Button from './Button'
const styles={
    producto:{
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width: '150px',
        padding:'10px ',
        borderRadius: '5px',
        // height:'50%'
    },
    img:{
        width:'100%',
        height:'50%',
        objectFit: 'cover'
    }
}
function Producto({ agregarAlCarro, producto }) {
  return (
    <div style={styles.producto}>

        <img alt={`${producto.name}`} src={producto.img} style={styles.img}></img>
        <h3>{producto.name}</h3>
        <p>{producto.price}</p>
        <Button onClick={()=>agregarAlCarro(producto)}>
            Agregar al carro
        </Button>
    </div>
  )
}

export default Producto
