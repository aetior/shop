import React from 'react';

const styles = {
  layout: {
    backgroundColor: '#fff',
    color: '#0A283E',
    display: 'flex',
    alignItems: 'center',
    flexDirection:'column'

  },
  container:{
    with:'1200px',
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
