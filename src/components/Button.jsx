import React from 'react'
const style={
    button:{
        backgroundColor: '#0A283E',
        color:'#fff',
        padding:'15px 20px',
        border:'none',
        borderRadius:'5px',
        cursor:'pointer',
    }
}
function Button(props) {
  return (
    <button {...props} style={style.button}/>
  )
}

export default Button