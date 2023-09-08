import { Button } from '@banana'

function App() {
  const onClick = () => {
    console.log('我被点了')
  }

  return (
    <div className="flex gap-2">
      <Button
        onClick={onClick}
        className="c-white"
        transition="colors duration-300"
        bg="blue-5 hover:blue-6 active:blue-7"
      >标准按钮</Button>
      <Button
        onClick={onClick}
        className="c-white"
        transition="colors duration-300"
        bg="blue-5 hover:blue-6 active:blue-7"
      >标准按钮</Button>
      <Button
        onClick={onClick}
        className="c-white"
        transition="colors duration-300"
        bg="red-6 hover:red-7 active:red-8"
      >标准按钮</Button>
    </div>
  )
}

export default App