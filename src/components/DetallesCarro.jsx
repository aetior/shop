import React, { useState } from 'react';

const style = {
  detallesCarro: {
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: '30px',
    boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
    borderRadius: '5px',
    width: '300px',
    right: '50px'
  },
  ul: {
    margin: 0,
    padding: 0
  },
  product: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    borderBottom: 'solid 1px #aaa'
  }
};

function DetallesCarro({ carro }) {
  const [carroState, setCarro] = useState(carro); // Inicializar el estado del carro

  const handleChangeSum = (index, action) => {
    // Crear una copia del carro
    const newCarro = [...carroState];
    // Incrementar o disminuir la cantidad del producto en función de la acción
    if (action === 'incrementar') {
      newCarro[index].cantidad++;
    } else if (action === 'disminuir' && newCarro[index].cantidad > 0) {
      newCarro[index].cantidad--;
    }
    // Actualizar el estado del carro
    setCarro(newCarro);
  };

  return (
    <div style={style.detallesCarro}>
      <ul style={style.ul}>
        {carroState.map((x, index) => (
          <li style={style.product} key={x.name}>
            <img src={x.img} alt={x.name} width='50' height='50' />
            {x.name}
            <button onClick={() => handleChangeSum(index, 'incrementar')}>+</button>
            <span>{x.cantidad}</span>
            <button onClick={() => handleChangeSum(index, 'disminuir')}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetallesCarro;
