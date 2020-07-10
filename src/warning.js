import React from 'react'

function Warning({ message }) {
  return (
    <div style={{
      border: 'solid medium #ccc',
      borderRadius: '4px',
      background: '#ddd',
      color: '#777',
      fontWeight: 'bold',
      padding: '10px'
    }}>
      {message}
    </div>
  )
}

export default Warning
