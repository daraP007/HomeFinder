import { useState } from 'react'
import './App.css'
import SimpleMap from './Map'

function App() {

  return (
    <>
      <div className = "home">
        <h2>Let's find you a new home</h2>
        <input type="text" placeholder='Please enter city, state' />
        <button >Submit</button>
      </div>
      <SimpleMap/>
    </>
  )
}

export default App
