import React from 'react'
import Producto from './Producto'
const styles={
  productos:{
    display:'flex',
    flexDirecciton:'row', 
    justifyContent: 'center',
    gap:15
  }
}
function Productos({ productos, agregarAlCarro }) {
  return (
    <div style={styles.productos}>
      {productos.map(producto => (
        <Producto
          agregarAlCarro={agregarAlCarro}
          key={producto.name}
          producto={producto}

        />
      ))}
    </div>
  )
}

export default Productos
