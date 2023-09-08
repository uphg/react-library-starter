import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Content: React.FC<Props> = ({ children }) => {
  return (
    <div className="pt-15 px-8">{children}</div>
  ) 
}

export default Content