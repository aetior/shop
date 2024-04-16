import React from 'react';

const style = {
  bubbleAlert: {
    backgroundColor: '#E9725A',
    borderRadius: '15px',
    color: '#fff',
    padding: '2px 10px',
    fontSize: '0.9rem',
    width: '20px', 
  }
};

function BubbleAlert(props) {
  function getNumber(n) {
    if (!n) {
      return '';
    }
    return n > 9 ? '9+' : n;
  }

  return (
    <span style={style.bubbleAlert}>
      {getNumber(props.number)}
    </span>
  );
}

export default BubbleAlert;
