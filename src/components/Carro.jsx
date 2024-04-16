import React from 'react';
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';

const style = {
  carro: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer'
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20
  }
};

function Carro({ carro ,esCarroVisible, mostrarCarro}) { // Se añade destructuring para obtener carro de las props
  const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0); // Se calcula la cantidad total

  return (
    <div>
      <span style={style.bubble}>
        {cantidad !== 0 && <BubbleAlert number={cantidad} />} {/* Se renderiza BubbleAlert solo si cantidad no es 0 */}
      </span>
      <button style={style.carro} onClick={mostrarCarro}>
        Carro
      </button>
      {esCarroVisible?   <DetallesCarro carro={carro}/>:null}
   
    </div>
  );
}

export default Carro;
