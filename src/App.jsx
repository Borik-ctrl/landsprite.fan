import { useState } from 'react'

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
