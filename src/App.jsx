import { useState } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
function App() {
  const [state, setState] = useState({
    productos:[
      {name:'tomate', price:10, img:'./imgProductos/tomate.jpg'},
      {name:'manzana', price:15, img:'./imgProductos/manzana.webp'},
      {name:'pepino', price:5, img:'./imgProductos/pepino.jpg'},
    ]
  })
  
  return (
    <>
      <Layout>
        <Title/>
      <Productos
        agregarAlCarro={() => console.log('no hace nada')}
        productos={state.productos}
      />
      </Layout>
    </>
  )
}

export default App
