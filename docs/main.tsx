import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Button from '../src/components/Button'
import Demo from './demo.mdx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <Demo />
    </>
  )
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

export {
  Button
}