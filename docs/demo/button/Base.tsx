import { Button } from 'banana'

function Example() {
  const onClick = () => {
    console.log('我被点了')
  }
  return (
    <Button onClick={onClick}>点我</Button>
  )
}

export default Example