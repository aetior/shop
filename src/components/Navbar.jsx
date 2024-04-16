import React from 'react';
import Logo from './Logo';
import Carro from './Carro';
import DetallesCarro from './DetallesCarro'; 

const style = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '0 50px',
    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.1)' 
  }
};

function Navbar({ carro, esCarroVisible, mostrarCarro }) {
  return (
    <nav style={style.navbar}>
      <Logo />
      <Carro
        carro={carro}
        esCarroVisible={esCarroVisible}
        mostrarCarro={mostrarCarro}
      />
    </nav>
  );
}

export default Navbar;
