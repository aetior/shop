import React from 'react'
const style={
    detallesCarro:{
        backgroundColor: '#fff',
        position:'absolute',
        maginTop:'30',
        boxShadow:'1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius:'5px',
        width:'300px',
        right:50

    },
    ul:{
        margin: 0,
        padding: 0
    },
    product:{
        listStyleType:'none',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'25px 20px',
        borderBottom: 'solid 1px #aaa'
    }
}
function DetallesCarro({carro}) {
  return (
    <div style={style.detallesCarro}>
        <ul style={style.ul}>
            {carro.map(x=>
            <li style={style.product} key={x.name}>
                    <img src={x.img} alt={x.name} width='50' height='50'/>
                     {x.name}
                    <span> {x.cantidad}</span>

            </li>)}
        </ul>
    </div>
  )
}

export default DetallesCarro