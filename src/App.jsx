import { useState } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Title from './components/Title';

function App() {
  const [state, setState] = useState({
    productos: [
      { name: 'tomate', price: 10, img: './imgProductos/tomate.jpg' },
      { name: 'manzana', price: 15, img: './imgProductos/manzana.webp' },
      { name: 'pepino', price: 5, img: './imgProductos/pepino.jpg' },
      { name: 'chocolate', price: 10, img: './imgProductos/chocolate.webp' },
      { name: 'platano', price: 15, img: './imgProductos/platano.webp' },
      { name: 'brocoli', price: 5, img: './imgProductos/brocoli.webp' },
    ],
    carro: [],
    esCarroVisible: false,
  });

  const { carro, esCarroVisible } = state; 

  const agregarAlCarro = (producto) => {
    setState((prevState) => {
      const foundIndex = prevState.carro.findIndex((x) => x.name === producto.name);
      if (foundIndex !== -1) {
        const newCarro = [...prevState.carro];
        newCarro[foundIndex].cantidad++;
        return { ...prevState, carro: newCarro };
      } else {
        return { ...prevState, carro: [...prevState.carro, { ...producto, cantidad: 1 }] };
      }
    });
  };

  const toggleCarroVisibility = () => {
    setState((prevState) => ({ ...prevState, esCarroVisible: !prevState.esCarroVisible }));
  };

  return (
    <>
      <Navbar carro={carro} esCarroVisible={esCarroVisible} mostrarCarro={toggleCarroVisibility} />
      <Layout>
        <Title />
        <Productos agregarAlCarro={agregarAlCarro} productos={state.productos} />
      </Layout>
    </>
  );
}

export default App;
