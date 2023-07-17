import { useState } from 'react'
import './App.css'
import Buttton from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Buttton onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Buttton>
    </>
  )
}

export default App
