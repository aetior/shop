import React from 'react'
import Producto from './Producto'
const styles = {
  productos: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
    jutifyContent:'center',
    gap: 24,
    gridAutoRows:'300px',
    width:'100%'
  },
};
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
