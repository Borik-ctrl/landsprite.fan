import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Compendium from './Compendium'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Compendium />
      </div>
    </>
  )
}

export default App
