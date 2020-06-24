import React from 'react'
import logo from './logo.svg'
import './App.css'
import ConvertKitForm from 'convertkit-react'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
          <ConvertKitForm
            formId={1423820}
          />
      </header>
    </div>
  )
}

export default App

