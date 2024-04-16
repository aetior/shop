import React from 'react';

const styles = {
  layout: {
    backgroundColor: '#fff',
    color: '#0A283E',
    display: 'flex',
    alignItems: 'center',
    flexDirection:'column',
    justifyContent:'center',
    width:'50%',
    margin:'auto',

  },
  container:{
    with:'50%',
  }
};

function Layout(props) {
  return (
    <div style={styles.layout}>
      <div style={styles.container}>
        {props.children}
      
      </div>
    
    </div>
  );
}

export default Layout;
